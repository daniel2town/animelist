import React from "react";
import { Link } from 'react-router-dom';

import { Layout, Menu } from "antd";
import logo from "../../images/zenitsu.png";

const { Header } = Layout;

function header() {
  return (
    <div>
      <Header>
        <div className="logo">
          <img src={logo} alt="" style={{ width: 50, height: 50, marginRight: 20 }}></img>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
                <Link to="/season">Seasons</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </div>
  );
}

export default header;
