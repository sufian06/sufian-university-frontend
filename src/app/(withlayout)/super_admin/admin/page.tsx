import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
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
      <h1>Admin list</h1>
      <Link href="/super_admin/admin/create">
        <Button type="primary">Create Admin</Button>
      </Link>
    </div>
  );
};

export default ManageAdminPage;
