import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";

const CreateDepartmentPage = () => {
  const base = "super_admin";
  return (
    <div>
      <SUMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create department page</h1>
    </div>
  );
};

export default CreateDepartmentPage;
