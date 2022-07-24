import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';


// import components
import Exchanges from './Exchanges/Exchanges';
import Markets from './Markets/Markets';
import TabLayout from './ExchangeMarket/TabLayout';

import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));


const MyLayout = () => (
  <Layout hasSider>
     <BrowserRouter>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
     
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
      
          <Menu.Item key="1">
            <Link to="/exchanges"> Exchange List</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/markets">Market List</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/exchangemarket">Exchange and Market</Link>
          </Menu.Item>
      </Menu>
      {/* </BrowserRouter> */}
    </Sider>
    
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: 'center',
          }}
        >
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/exchangemarket" element={<TabLayout />} />
          </Routes>
          {/* <Exchanges /> */}
          {/* <Markets/> */}
         
          
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        DashBoard ©2022 Data Fetched From CoinCap
      </Footer>
    </Layout>
    </BrowserRouter>
  </Layout>
);

export default MyLayout;