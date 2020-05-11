import React from 'react';

import { Layout, Breadcrumb } from 'antd';

import Header from '../Header/index'
import Select from '../AnimeSeason/select'
import Card from '../AnimeSeason/card'

const { Content, Footer } = Layout;

function season() {

  return (
    <div>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>Season</Breadcrumb.Item>
            <Breadcrumb.Item>2020</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-content">
            <Select />
            <Card />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>AAAAANIME! ©2020 Created by Daniel2town</Footer>
      </Layout>
    </div>
  );
}

export default season;