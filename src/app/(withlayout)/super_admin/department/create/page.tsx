"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { createDepartmentSchema } from "@/schemas/createDepartment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating Department...");
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department added successfully!");
    } catch (err: any) {
      console.error(err);
      message.error(err.message);
    }
  };

  const base = "super_admin";
  return (
    <div>
      <SUMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(createDepartmentSchema)}
      >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add Department
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
