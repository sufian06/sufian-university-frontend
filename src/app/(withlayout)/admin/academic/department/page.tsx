"use client";

import ActionBar from "@/components/ui/ActionBar";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import SUMTable from "@/components/ui/SUMTable";
import { Button } from "antd";
import dayjs from "dayjs";
import Link from "next/link";

const ACDepartmentPage = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Faculty",
      dataIndex: "academicFaculty",
      render: function (data: any) {
        return <>{data?.title}</>;
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    // setPage(page);
    // setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
    // setSortBy(field as string);
    // setSortOrder(order === "ascend" ? "asc" : "desc");
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

      <ActionBar title="Academic Department List">
        <div>
          <Link href="/admin/academic/department/create">
            <Button type="primary">Create Department</Button>
          </Link>
        </div>
      </ActionBar>

      <SUMTable
        loading={false}
        columns={columns}
        dataSource={""}
        pageSize={10}
        totalPages={1}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ACDepartmentPage;
