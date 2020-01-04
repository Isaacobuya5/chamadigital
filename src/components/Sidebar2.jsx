import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import "../styles/sidebar.css";

// const MenuItems = [{menu: 'Members', subMenu: ['Add Members', 'View Members']}]

const Sidebar2 = () => (
  // <Layout style={{ minHeight: '100vh' }}>
  <Sider
    style={{
      overflow: "hidden",
      height: "100vh",
      position: "fixed",
      left: 0,
      backgroundColor: "#615EB2",
      fontWeight: "bold"
    }}
  >
    <div className="logo">ChamaDigital</div>
    <Menu
      // theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{
        height: "100%",
        borderRight: 0,
        backgroundColor: "#615EB2",
        color: "#ffffff"
      }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            {/* <Icon type="user" /> */}
            Members
          </span>
        }
      >
        <Menu.Item key="1">
          <i className="fas fa-user-plus"></i> Add Members
        </Menu.Item>
        <Menu.Item key="2">
          <i className="fas fa-users"></i> View Members
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            {/* <Icon type="laptop" /> */}
            Contributions
          </span>
        }
      >
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            {/* <Icon type="notification" /> */}
            Loans
          </span>
        }
      >
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span>
            {/* <Icon type="notification" /> */}
            Fines
          </span>
        }
      >
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar2;
