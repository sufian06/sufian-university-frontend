"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating Department...");
    try {
      await updateDepartment({ id, body: values });
      message.success("Department updated successfully!");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div>
      <SUMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />

      <ActionBar title="Update Department"></ActionBar>
      {/* edit form */}
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
