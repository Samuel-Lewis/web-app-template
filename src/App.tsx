import "./App.less";
import {
  Layout,
  Menu,
  Typography
} from "antd";
import React from "react";
import {
  Link,
  Outlet
} from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Link: L } = Typography;

function App() {
  return (
    <Layout className="app">
      <Header>
        <Link to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt=""
          />
        </Link>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>

      <Footer className="footer">
        Created by <L href="https://samuel-lewis.com">Samuel Lewis</L>
      </Footer>
    </Layout>
  );
}

export default App;
