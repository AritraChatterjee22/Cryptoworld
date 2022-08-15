import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryproApi';

const { Title} = Typography;
const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...';

  // console.log(data);
  return (
    <>
    <Title level={2} className="heading" style={{textAlign: "center"}}>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats} style={{textAlign: "center"}}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value="5" style={{textAlign: "center"}}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value="5"  style={{textAlign: "center"}}/></Col>
      <Col span={12}><Statistic title="Total 24h value" value="5" style={{textAlign: "center"}}/></Col>
      <Col span={12}><Statistic title="Total Market" value="5" style={{textAlign: "center"}}/></Col>
      
    </Row>
    </>
  )
}

export default Homepage