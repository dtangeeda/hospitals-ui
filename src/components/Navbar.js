import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Layout } from "antd";
import logo from "../images/Logo1.png";
const { Header } = Layout;

export default function Navbar() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 2, width: "100%" }}>
        <div className="navbar">
          <img src={logo}></img>
          <ul className="nav-links">
            <li>
              <Link className="active" to="/">Home</Link>
            </li>
            <li>
              <Link className="active" to="/about">About</Link>
            </li>
            <li>
              <Link className="active" to="/blog">Blog</Link>
            </li>
            <li>
              <Link className="active" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </Header>
    </Layout>
  );
}
