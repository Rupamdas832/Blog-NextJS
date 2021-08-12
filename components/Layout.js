import React from "react";
import layoutStyles from "../styles/Layout.module.css";
import { Nav } from "./Nav";
export const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </div>
  );
};
