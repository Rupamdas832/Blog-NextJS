import React from "react";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export const Nav = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/compose">Compose</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};
