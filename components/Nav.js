import React from "react";
import Link from "next/link";
import "antd/dist/antd.css";
import { Menu, Layout } from "antd";
const { Header } = Layout;

export const Nav = () => {
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/compose">Compose</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};
