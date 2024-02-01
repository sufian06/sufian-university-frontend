import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";

const ManageUsersPage = () => {
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
      <h1>User List</h1>
    </div>
  );
};

export default ManageUsersPage;
