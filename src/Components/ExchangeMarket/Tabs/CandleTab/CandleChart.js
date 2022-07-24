
import React, { Component, useEffect , useState} from 'react';
import UseFetch from '../../../use-fetch.effect';
import CanvasJSReact from '../../../../canvasjs.react';
import { Divider } from 'antd';
import Chart from "react-apexcharts";
import dayjs from 'dayjs';


// let CanvasJS = CanvasJSReact.CanvasJS;
// let CanvasJSChart = CanvasJSReact.CanvasJSChart;



function CandleChart(props) {

  const {interval, baseId, quoteId, exchangeId} = props.urlParams;
  const [loading, setLoading] = useState();

  let fetchedData = UseFetch(`https://api.coincap.io/v2/candles?exchange=${exchangeId}&interval=${interval}&baseId=${baseId}&quoteId=${quoteId}`);

  let data = {
    series: [
      {
        name: "candle",
        data:loading
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "candlestick",
        animations: {
          enabled: false}
      },
      markers: {
        size: 0
     },
      title: {
        text: "example react candlestick chart",
        align: "left"
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: function (val) {
            return dayjs(val).format("MMM DD HH:mm");
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: false
        }
      }
    }
  };

  useEffect(() => {
    // console.log(fetchedData);
    // mapping fetchedData to options.data.dataPoints
    // CanvasJS.zoomEnabled = true;
    if(fetchedData){
     
      
      let optionData = fetchedData.map(item => ({
          x: new Date(item.period),
          y: [item.open, item.high, item.low, item.close]}
          )
      
      )
      setLoading(optionData.slice(0,100));
      // console.log(fetchedData)
    }
   

  }, [fetchedData],[props.urlParams]);

  return (
    <>
    <Divider>
      
    </Divider>
    {/* <CanvasJSChart options = {options}
				onRef={ref => CanvasJS = ref}
			/> */}
      <Chart
        options={data.options}
        series={data.series}
        type="candlestick"
        height={350}
        width={1000}
      />
    </>
  
  )
}

export default CandleChart

