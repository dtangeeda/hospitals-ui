import React from "react";
import { Layout } from "antd";
import "../styles/About.css";
import { Footerr } from "./Footerr";
const { Content } = Layout;

export const About = () => {
  return (
    <Layout>
      <div className="About-content">
        <div className="about-heading">
          <h1 className="heading">About Us</h1>
          <p className="about-para para">
            {" "}
            We are Developers and Healthcare analysts and we built this site to showcase the price transparency that was brought forward by CMS to require all Hospitals to publish their prices.
          We built a unique scraper tool to fetch the prices. We welcome your feedback on this site.
          </p>
        </div>
      </div>
      <Content
        className="site-layout about-sec"
        style={{ padding: "0px 36px" }}
      >
      </Content>
      <Footerr />
    </Layout>
  );
};
