import React from "react";
import { Layout } from "antd";
import "../styles/blog.css";
import { Footerr } from "./Footerr";
import BlogCard from "./BlogCard";
const { Content } = Layout;

export default function Blog() {
  return (
    <Layout>
      <div className="Blog-content">
        <div className="top-heading">
          <h1 className="heading">Blog</h1>
          <p className="para"> Read articles about Hospital price index </p>
        </div>
      </div>
      <Content className="site-layout" style={{ padding: "0 55px" }}>
        <div className="articles-heading">
          <h3 className="blog-artical-heading">Recent Articles</h3>
        </div>
        <hr style={{ marginTop: "12px" }}></hr>
        <BlogCard />
        <div className="up-coming-rticles">

        </div>
      </Content>
      <Footerr />
    </Layout>
  );
}
