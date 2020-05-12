/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeasonAnime } from '../../store/actions/anime';

import { Layout, Breadcrumb, Button, Tooltip, Spin, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Header from '../Header/index'
import Select from '../AnimeSeason/select'
import Card from '../AnimeSeason/card'

const { Content, Footer } = Layout;

function season () {
  const dispatch = useDispatch();
  const seasonAnime = useSelector((state) => state.anime.season);
  const [year, setYear] = useState();
  const [season, setSeason] = useState();
  const [loading, setLoading] = useState(false)
  
  const animeData = { year, season }
  
  const spin = () => {
    return (
      <Space size="large">
        <Spin size="large" style={{display: 'center'}} />
      </Space>
    )
  }

  const onClick = () => {
      setLoading(true)
      setTimeout(() => {
        spin();
      }, 500);

      setTimeout(() => {
        setLoading(false)
        dispatch(fetchSeasonAnime(animeData));
      }, 4000);
  }

  return (
    <div>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Seasons</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div style={{display: 'flex'}}>
              <Select yearData={(year) => setYear(year)} seasonData={(season) => setSeason(season)}/>
              <Tooltip title="search">
                <Button onClick={onClick} style={{backgroundColor: '#f2a365', borderColor: '#f2a365'}} type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
            </div>
            {loading && (
              <div className="spin">
                {spin()}
              </div>
            )}
            <Card data={seasonAnime} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>AAAAANIME! ©2020 Created by Daniel2town</Footer>
      </Layout>
    </div>
  );
}

export default season;