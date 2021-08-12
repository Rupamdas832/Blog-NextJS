import { Button, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { Header } from "../components";
import composeStyles from "../styles/Compose.module.css";
import "antd/dist/antd.css";
import axios from "axios";

const compose = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [creator, setCreator] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");

  const composeBtn = async () => {
    try {
      const { data, status } = await axios.post(
        "https://practice-server-with-database.rupamdas.repl.co/posts",
        {
          title,
          desc,
          name: creator,
          body,
          img,
        }
      );
      if (status === 201) {
        setTitle("");
        setDesc("");
        setCreator("");
        setBody("");
        setImg("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={composeStyles.composeContainer}>
      <Header title="Compose New Blog" />
      <Row className={composeStyles.row}>
        <label>Title</label>
        <Input
          placeholder="Enter blog title"
          size="large"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Row>
      <Row className={composeStyles.row}>
        <label>Description</label>
        <Input
          placeholder="Enter blog description"
          size="large"
          onChange={(e) => setDesc(e.target.value)}
        />
      </Row>
      <Row className={composeStyles.row}>
        <label>Creator Name</label>
        <Input
          placeholder="Enter your name"
          size="large"
          onChange={(e) => setCreator(e.target.value)}
        />
      </Row>
      <Row className={composeStyles.row}>
        <label>Body</label>
        <TextArea
          placeholder="Enter your content"
          size="large"
          onChange={(e) => setBody(e.target.value)}
        />
      </Row>
      <Row className={composeStyles.row}>
        <label>Image Url</label>
        <Input
          placeholder="Enter image URL"
          size="large"
          onChange={(e) => setImg(e.target.value)}
        />
      </Row>
      <Button type="primary" size="large" onClick={composeBtn}>
        Compose
      </Button>
    </div>
  );
};

export default compose;
