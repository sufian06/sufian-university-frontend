"use client";

import ActionBar from "@/components/ui/ActionBar";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import SUMModal from "@/components/ui/SUMModal";
import SUMTable from "@/components/ui/SUMTable";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [departmentId, setDepartmentId] = useState<string>("");

  const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const departments = data?.departments;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting Department...");
    try {
      const res = await deleteDepartment(id);
      if (res) {
        message.success("Department deleted successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/department/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0 5px",
                }}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>

            <Button
              onClick={() => {
                setOpen(true);
                setDepartmentId(data?.id);
              }} //deleteHandler(data?.id)
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <SUMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ActionBar title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search"
          style={{
            width: "20%",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/admin/department/create">
            <Button type="primary">Create Department</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <SUMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      {/* Delete with Modal */}
      <SUMModal
        title="Delete Department"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(departmentId)}
      >
        <p>Do you want to delete this department?</p>
      </SUMModal>
    </div>
  );
};

export default ManageDepartmentPage;
