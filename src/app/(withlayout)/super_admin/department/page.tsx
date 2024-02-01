import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageDepartmentPage = () => {
  return (
    <div>
      <SUMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button type="primary">Create Department</Button>
      </Link>
    </div>
  );
};

export default ManageDepartmentPage;
