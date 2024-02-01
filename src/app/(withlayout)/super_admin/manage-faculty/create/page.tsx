import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";

const CreateFacultyPage = () => {
  const base = "super_admin";
  return (
    <div>
      <SUMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
    </div>
  );
};

export default CreateFacultyPage;
