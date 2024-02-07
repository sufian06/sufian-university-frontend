"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { createDepartmentSchema } from "@/schemas/createDepartment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateACFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating Academic Faculty...");
    try {
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Academic faculty added successfully!");
      }
    } catch (err: any) {
      console.error(err);
      message.error(err.message);
    }
  };

  const base = "admin";
  return (
    <div>
      <SUMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-faculty", link: `/${base}/academic/faculty` },
        ]}
      />
      <h1>Create Academic Faculty</h1>
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
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateACFacultyPage;
