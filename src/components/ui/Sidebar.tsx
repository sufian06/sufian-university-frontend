"use client";

import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const role = USER_ROLE.ADMIN;
  const { role } = getUserInfo() as any;
  // console.log(role);

  const sidebarResponsiveLogo = () => {
    if (!collapsed) {
      return (
        <div
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "600",
            marginBottom: ".5rem",
            padding: "10px 0",
          }}
        >
          Sufian University
        </div>
      );
    } else {
      return (
        <div
          style={{
            color: "white",
            fontSize: "1rem",
            textAlign: "center",
            fontWeight: "500",
            marginBottom: ".5rem",
            padding: "10px 0",
          }}
        >
          Sufian University
        </div>
      );
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {sidebarResponsiveLogo()}
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
