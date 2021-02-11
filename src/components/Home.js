import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-table/react-table.css";
import { Aurora_Bay_Care } from "../places/aurorBayCare";
import { MVH_Ohio } from "../places/mvhOhio";
import { JFK_Florida } from "../places/jfkFlorida";
import { Duke_Health } from "../places/dukehealth";
import { Osu_Wexner } from "../places/osuwexner";
import { UVa_Health } from "../places/uvahealth";
import { Nationwide_Child } from "../places/nationwidechild";
import { Layout, Row, Col } from "antd";
import "../styles/home.css";
import HomeInput from "../components/HomeIput";
import Sider from "./menu/menu";
import homeImg from "../images/home.png";

const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Router>
        <Layout>
          <Content
            className="site-layout home-sec"
            style={{ padding: "0 36px", marginTop: 40 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24 }}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" xs={24} xl={12} span={12}>
                  <HomeInput />
                  <div className="menus-main">
                    <p className="sugg-para">Suggestions for you</p>
                    <Sider />
                  </div>
                </Col>
                <Col className="gutter-row" xs={24} xl={12} span={12}>

                  <img src={homeImg} ></img>
                  <div className="home-para ">
                    <p className="para">
                      As per Federal Government's new Price Transparency rule, all US
                      Hospitals are required to publish prices of their services to the
                      public. We developed a Web Scraper tool to scrape the price data
                      from Hospitals' websites and show the Prices here. The site is
                      still in beta and we are working to build extensive price data
                      sets for use in health price research and data comparisons which
                      can benefit patients and end users who want to seek pricing
                      information at various Hospitals.
                   </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Switch>
            <Route path="/jfk-florida" component={JFK_Florida} />
            <Route path="/duke-health" component={Duke_Health} />
            <Route path="/mvh-ohio" component={MVH_Ohio} />
            <Route path="/osu-wexner" component={Osu_Wexner} />
            <Route path="/nationwide-childrens" component={Nationwide_Child} />
            <Route path="/uva-health" component={UVa_Health} />
            <Route exact path="/aurora-baycare" component={Aurora_Bay_Care} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}
