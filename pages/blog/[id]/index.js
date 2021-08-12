import axios from "axios";
import React from "react";
import blogDetailStyles from "../../../styles/BlogDetail.module.css";

const index = ({ post }) => {
  const { body, createdAt, desc, img, name, _id, title } = post;
  return (
    <div className={blogDetailStyles.blogDetailContainer}>
      <h1>{title}</h1>
      <img src={img} alt="post" />
      <h3>{desc}</h3>
      <h5>- {name}</h5>
      <p>{createdAt}</p>
      <p>{body}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  let post;
  try {
    const { data, status } = await axios.get(
      `https://practice-server-with-database.rupamdas.repl.co/posts/${context.params.id}`
    );
    if (status === 200) {
      post = data.post;
    }
  } catch (error) {
    console.log(error);
  }

  //   const { data, status } = await axios.get(
  //     `https://practice-server-with-database.rupamdas.repl.co/posts/${context.params.id}`
  //   );
  //   let post = data.post;
  return {
    props: {
      post,
    },
  };
};

export default index;
