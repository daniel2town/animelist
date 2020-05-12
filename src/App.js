import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import logo from "./images/zenitsu.png";

import AnimeList from "./components/AnimeSeason/index";
import "antd/dist/antd.css";
import "./styles/index.scss";

const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <div className="logo">
            <img
              src={logo}
              alt=""
              style={{ width: 50, height: 50, marginRight: 20 }}
            ></img>
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/season">Seasons</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Switch>
          <Route exact path="/season" component={AnimeList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
