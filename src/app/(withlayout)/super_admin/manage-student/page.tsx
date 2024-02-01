"use client";

import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentsPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <SUMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>Mange students page</h1>
      <Link href="/super_admin/manage-student/create">
        <Button type="primary">Create Student</Button>
      </Link>
    </div>
  );
};

export default ManageStudentsPage;
