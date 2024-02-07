"use client";

import ActionBar from "@/components/ui/ActionBar";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import SUMTable from "@/components/ui/SUMTable";
import { Button } from "antd";
import dayjs from "dayjs";
import Link from "next/link";

const ACSemesterPage = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: true,
    },
    {
      title: "Start month",
      dataIndex: "startMonth",
      sorter: true,
    },
    {
      title: "End month",
      dataIndex: "endMonth",
      sorter: true,
    },
    {
      title: "Year",
      dataIndex: "year",
      sorter: true,
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

      <ActionBar title="Academic Semesters List">
        <div>
          <Link href="/admin/academic/semester/create">
            <Button type="primary">Create Semester</Button>
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

export default ACSemesterPage;
