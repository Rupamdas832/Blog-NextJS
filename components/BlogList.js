import React from "react";
import { BlogItem } from "./BlogItem";
import blogItemStyles from "../styles/BlogItem.module.css";

export const BlogList = ({ blogs }) => {
  return (
    <div className={blogItemStyles.blogList}>
      {blogs.map((blogItem) => {
        return <BlogItem blogItem={blogItem} key={blogItem._id} />;
      })}
    </div>
  );
};
