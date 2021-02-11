import React from "react";
import card1Image from "../images/card1.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import card2Image from "../images/card2.png";
import card3Image from "../images/card3.png";
import { Card, Col, Row } from "antd";

export default function BlogCard() {
  return (
    <>
      <div className="cards">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} md={12} xl={8} span={8}>
            <Card
              hoverable
              style={{ width: 369, borderRadius: 10 }}
              cover={
                <img
                  alt="example"
                  src={card1Image}
                  style={{ borderRadius: 10 }}
                />
              }
            >
              <h3 className="card-heading">Hospital beds are very clean</h3>
              <p className="blog-para">
                {" "}
                Hospital in New york city has just reached 1200 patients in one
                day due to Covid
              </p>
              <a>Read More</a>
              <ArrowRightOutlined />
            </Card>
          </Col>
          <Col xs={24} md={12} xl={8} span={8}>
            <Card
              hoverable
              style={{ width: 369, borderRadius: 10 }}
              cover={
                <img
                  alt="example"
                  src={card2Image}
                  style={{ borderRadius: 10 }}
                />
              }
            >
              <h3 className="card-heading">Hospital beds are very clean</h3>
              <p className="blog-para">
                {" "}
                Hospital in New york city has just reached 1200 patients in one
                day due to Covid
              </p>
              <a>Read More</a>
              <ArrowRightOutlined />
            </Card>
          </Col>
          <Col xs={24} md={12} xl={8} span={8}>
            <Card
              hoverable
              style={{ width: 369, borderRadius: 10 }}
              cover={
                <img
                  alt="example"
                  src={card3Image}
                  style={{ borderRadius: 10 }}
                />
              }
            >
              <h3 className="card-heading">Hospital beds are very clean</h3>
              <p className="blog-para">
                {" "}
                Hospital in New york city has just reached 1200 patients in one
                day due to Covid
              </p>
              <a>Read More</a>
              <ArrowRightOutlined />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="show-btn-div">
        <button className="Blog-show-More">Show More</button>
      </div>

      {/* Up Comming Articles */}

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col xs={24} xl={12} span={12}>
            <Card
              className="up-comming-articles"
              title=" What is Price Transparency Rule and how does it matter ?"
              bordered={false}
            >
              <p className="para">Comming Soon</p>
            </Card>
          </Col>
          <Col xs={24} xl={12} span={12}>
            <Card
              className="up-comming-articles"
              title=" Explain Affordable Care Act or Obamacare."
              bordered={false}
            >
              <p className="para">Comming Soon</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
