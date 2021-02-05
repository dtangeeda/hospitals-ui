import React from "react";
import { Layout, Row, Col, Input } from "antd";
import footerlogo from "../images/footerlogo.svg"
import "../styles/footer.css";
const { Search } = Input;
const { Footer } = Layout;
const style = { padding: "8px 0" };
const onSearch = (value) => console.log(value);

export const Footerr = () => {
  return (
    <Layout>
      <Footer>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={24} md={12} xl={12} span={6}>
            <div style={style}>
              <img src={footerlogo} className="footerLogo" ></img>
              <p className="footer-para">
                Hospital price check is the place where you can get all the
                information about hospitals in USA
              </p>
            </div>
          </Col>
          <Col className="gutter-row" xs={24} md={12} xl={12} span={6}>
            <div style={style}>
              <h4 className="footer-heading">Subscribe</h4>
              <Search
                placeholder="Email address"
                allowClear
                enterButton="Send"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};
