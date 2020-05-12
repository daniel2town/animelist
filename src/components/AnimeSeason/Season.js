/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeasonAnime } from '../../store/actions/anime';

import { Layout, Breadcrumb, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Header from '../Header/index'
import Select from '../AnimeSeason/select'
import Card from '../AnimeSeason/card'

const { Content, Footer } = Layout;

function season () {
  const [year, setYear] = useState();
  const [season, setSeason] = useState();
  const seasonAnime = useSelector((state) => state.anime.season);
  const dispatch = useDispatch();
  const content = seasonAnime;
  const animeData = {
    year: year,
    season: season
  }
  

  const handleYear = (year) => {
    setYear(year)
  }

  const handleSeason = (season) => {
    setSeason(season)
  }

  const onClick = () => {
    setTimeout(() => {
      dispatch(fetchSeasonAnime(animeData));
    }, 4000);
  }

  console.log(seasonAnime)

  return (
    <div>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Seasons</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div style={{display: 'flex'}}>
              <Select yearData={(year) => handleYear(year)} seasonData={(season) => handleSeason(season)}/>
              <Tooltip title="search">
                <Button onClick={onClick} style={{backgroundColor: '#f2a365', borderColor: '#f2a365'}} type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
            </div>
            <Card data={content} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>AAAAANIME! ©2020 Created by Daniel2town</Footer>
      </Layout>
    </div>
  );
}

export default season;