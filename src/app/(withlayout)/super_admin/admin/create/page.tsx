import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";

const CreateAdminPage = () => {
  return (
    <div>
      <SUMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>CreateAdminPage</h1>
    </div>
  );
};

export default CreateAdminPage;
