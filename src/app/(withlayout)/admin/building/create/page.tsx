"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import SUMBreadCrumb from "@/components/ui/SUMBreadCrumb";
import { useAddBuildingMutation } from "@/redux/api/buildingApi";
import { Button, Col, Row, message } from "antd";

const CreateBuildingPage = () => {
  const [addBuilding] = useAddBuildingMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating Building");
    try {
      const res = await addBuilding(data).unwrap();
      if (res?.id) {
        message.success("Building added successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <SUMBreadCrumb
        items={[
          { label: "admin", link: "/admin" },
          { label: "building", link: "/admin/building" },
        ]}
      />
      <h1>Create Building</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="title"
              label="Title"
              placeholder="Enter building identity"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add Building
        </Button>
      </Form>
    </div>
  );
};

export default CreateBuildingPage;
