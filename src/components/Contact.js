import React from "react";
import { Layout, Row, Col, Input } from "antd";
import "../styles/Contact.css";
import { Footerr } from "./Footerr";
import ContactInput from "./ContactInput";
const { Content } = Layout;

export const Contact = () => {
  return (
    <Layout>
      <div className="Contact-content">
        <div className="top-heading">
          <h1 className="heading">Contact Us</h1>
          <p className="para"> We’ll get in touch with you shortly</p>
        </div>
      </div>
      <Content style={{ padding: "80px 167px" }}>
        <div className="enter-data">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} xl={12} span={12}>
              <div className="first-name-div">
                <label>First Name</label>
                <Input />
              </div>
              <div className="last-name-div">
                <label>Email</label>
                <Input type="email" />
              </div>
            </Col>
            <Col className="gutter-row" xs={24} xl={12} span={12}>
              <div className="emil-div">
                <label>Last Name </label>
                <Input />
              </div>
              <div className="subject-div">
                <label>Subject</label>
                <Input />
              </div>
            </Col>
          </Row>
          <ContactInput />
        </div>
      </Content>
      <Footerr />
    </Layout>
  );
};
