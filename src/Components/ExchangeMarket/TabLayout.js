import React from 'react'
import { Tabs } from 'antd';


import Candles from './Tabs/CandleTab/Candles.js';
import Prices from './Tabs/PricesTab/Prices.js';



const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

function TabLayout() {
  return (
    
    <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Candle OHLC Chart" key="1">
      <Candles/>
    </TabPane>
    <TabPane tab="Prices" key="2">
      <Prices/>
    </TabPane>
   
  </Tabs>
);
}

export default TabLayout