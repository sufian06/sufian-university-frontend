import { Row, Spin } from "antd";

const Loading = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      {/* <Space>
        <Spin tip="Loading" size="large" />
      </Space> */}
      <Spin size="large" />
    </Row>
  );
};

export default Loading;
