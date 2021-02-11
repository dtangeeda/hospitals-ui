import { Menu } from "antd";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../menu/menu.css"
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState(["sub3"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    >
      <SubMenu key="sub1" title="Florida">
        <Menu.Item key="1">
          <Link to="/duke-health">
            View Prices for Duke University Hospital -Durham, NC
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="North Carolina">
        <Menu.Item key="2">
          <Link to="/duke-health">
            View Prices for Duke University Hospital -Durham, NC
            </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title="Ohio">
        <Menu.Item key="3">
          <Link to="/mvh-ohio">
            View Prices for Miami Valley Hospital - Ohio
            </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/osu-wexner">
            View Prices for Ohio State University - Wexner
            </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/nationwide-childrens">
            View Prices for Nationwide Children's Hospital Ohio
            </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="su4" title="Virginia">
        <Menu.Item key="6">
          <Link to="/uva-health">
            View Prices for University of Virginia Health System
            </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" title="Wisconsin">
        <Menu.Item key="7">
          <Link to="/aurora-baycare">
            View Prices for Aurora BayCare Medical Center, Green Bay, WI
              </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sider;