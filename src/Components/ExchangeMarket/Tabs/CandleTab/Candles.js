import React, { useEffect, useState } from 'react'

import { Divider, Row, Col } from 'antd';
import dayjs from "dayjs"

import ExchangeIdSelect from './Selects/ExchangeIdSelect'
import BaseIdSelect from './Selects/BaseIdSelect';
import QuoteIdSelect from './Selects/QuoteIdSelect';
import Interval from './Selects/Interval';
import CandleChart from './CandleChart';
function Candles(props) {
  const [loading, setLoading] = useState(false);
  const [exchangeId, setExchangeId] = React.useState('binance');
  const [baseId, setBaseId] = React.useState('polygon');
  const [quoteId, setQuoteId] = React.useState('tether');
  const [interval, setInterval] = React.useState('m1');

  const urlParams = {exchangeId, baseId, quoteId, interval,setBaseId, setQuoteId, setExchangeId, setInterval};

  // dependecy array for any urlParams change
  useEffect(() => {
    // console.log();
  }, [urlParams]);

  return (
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <span>Select Exchange</span>
      <ExchangeIdSelect urlParams={urlParams}/>
      </Col>
      <Col className="gutter-row" span={6}>
        <span>Select Base</span>
        <BaseIdSelect urlParams={urlParams}/>
      </Col>
      <Col className="gutter-row" span={6}>
        <span>Select Quote</span>
       <QuoteIdSelect urlParams={urlParams}/>
      </Col>
      <Col className="gutter-row" span={6}>
        <span>Select Interval</span>
        <Interval urlParams={urlParams}/>
      </Col>
    </Row>
    <Divider orientation="left"/>
{/* <Data urlParams={urlParams}/> */}
    <CandleChart urlParams={urlParams}/>
    </>

  )
}

export default Candles