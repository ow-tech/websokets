import React, {useState, useEffect, useRef} from 'react'
import UseFetch from '../../../use-fetch.effect'
import usePrevious from './CustomUseRef'

import {Table} from 'antd'
import "../../../../index.css"
// import {Provider} from 'react-redux';
// import configureStore from './Store';


function Prices() {
  // const [baseId, setBaseId] = useState('bitcoin','ethereum','monero','litecoin')
  // 'bitcoin':'0','ethereum':'0','monero':'0','litecoin':'0'
  const [data, setData] = useState({});
  const [previous, setPrevious] = useState([""]);
  let baseId =['bitcoin','ethereum','monero','litecoin']
  const prevCountRef = usePrevious(data);

 

  const baseIdfetched = UseFetch('https://api.coincap.io/v2/markets')
  const assetsfetched = UseFetch('https://api.coincap.io/v2/assets')
  // priceUsd
  

useEffect(() => {
  // if(assetsfetched){
  //   data.m

  // }

  // prevCountRef.current = data
  if(baseIdfetched){
    let unique = Array.from(new Set(baseIdfetched.map(item =>item.baseId)))
    // setBaseId(unique)
    // console.log(unique)
     
   }
   const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin`)
  //  ('wss://ws.coincap.io/prices?assets=ALL')
  //  pricesWs.connect()
  let continues ={}
    pricesWs.onmessage = function (msg) {
        let obj=JSON.parse(msg.data)
        Object.keys(obj).map(key=>{
          continues[key]=obj[key]
        })
        // setPrevious(data)
       
       setData({...data, ...continues})

     
    }
    // console.log(prevCountRef.current)
   }, [data, baseIdfetched, baseId, prevCountRef],[]);  

     

 return (
    <>
  <table>
        <thead>
          <tr>
            <th style={{"width": "40%"}}>Exchange</th>
            <th>Current Price (USD)</th>
            <th>Previous Price (USD)</th>
          </tr>
        </thead>

        <tbody>
          <>
          {baseId ?
          <>
          {baseId.map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{data[key]}</td>
              {/* <td>{prevCountRef[key]}</td> */}
              <>
              {prevCountRef? <td>{prevCountRef[key]}</td> : null}
              </>
              
              {/* <td>{prevCountRef.current[key]}</td> */}
             
            </tr>
              ))}
              </>
              : null}
            </>
        </tbody>
      </table>
 
 
    </>
 )
}

export default Prices