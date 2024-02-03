import ActionBar from "@/components/ui/ActionBar";
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
      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create Department</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageDepartmentPage;
