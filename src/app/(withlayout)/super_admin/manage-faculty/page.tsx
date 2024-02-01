import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageFacultyPage = () => {
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
      <h1>Faculty List</h1>
      <Link href="/super_admin/manage-faculty/create">
        <Button type="primary">Create Faculty</Button>
      </Link>
    </div>
  );
};

export default ManageFacultyPage;
