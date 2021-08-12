import Title from "antd/lib/skeleton/Title";
import React from "react";
import headerStyles from "../styles/Header.module.css";

export const Header = ({ title }) => {
  return (
    <div>
      <h1 className={headerStyles.header}>{title}</h1>
    </div>
  );
};
