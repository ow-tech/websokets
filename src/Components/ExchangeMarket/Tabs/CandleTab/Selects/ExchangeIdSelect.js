import React, { useState, useEffect } from 'react'

import CustomSelect from './CustomSelect'
import UseFetch from '../../../../use-fetch.effect';

function ExchangeIdSelect(props) {
   let data=UseFetch("https://api.coincap.io/v2/exchanges");
    const [exchangeData, setExchangeData] =useState([]);
    const {exchangeId, setExchangeId} = props.urlParams;



    // const handleChange = e => {
    //     // console.log(e.value)
    //     setExchangeData(e.value);
    //   }


    useEffect(() => {
        let distinctive;
        if(data){
            distinctive = [...new Set (data.map(item=> item.exchangeId ))].map(item=> ({value: item, label: item}))
        }

        setExchangeData(distinctive)
      
    }, [data]);

  return (
   <>
    <CustomSelect options={exchangeData} onChange={(e)=> setExchangeId(e.value)}/>
   </>
  )
}

export default ExchangeIdSelect