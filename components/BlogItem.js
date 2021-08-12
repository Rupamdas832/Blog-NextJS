import Link from "next/link";
import React from "react";
import blogItemStyles from "../styles/BlogItem.module.css";

export const BlogItem = ({ blogItem }) => {
  const { _id, title, name, desc, img } = blogItem;
  return (
    <Link href="/blog/[id]" as={`/blog/${_id}`}>
      <div className={blogItemStyles.blogItem}>
        <div className={blogItemStyles.blogItemImageSection}>
          <img src={img} alt="blog" />
        </div>
        <div className={blogItemStyles.blogItemDetailSection}>
          <h2>{title}</h2>
          <p>{desc}</p>
          <h5>- {name}</h5>
        </div>
      </div>
    </Link>
  );
};
