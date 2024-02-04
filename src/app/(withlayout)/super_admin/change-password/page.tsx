"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button } from "antd";

const ResetPassPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
      <Form submitHandler={onSubmit}>
        <h3 style={{ marginBottom: "10px" }}>Reset Password</h3>
        <div style={{ margin: "10px 0" }}>
          <FormInput name="oldPassword" label="Old Password" type="password" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <FormInput name="newPassword" label="New Password" type="password" />
        </div>
        <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
          Password Reset
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassPage;
