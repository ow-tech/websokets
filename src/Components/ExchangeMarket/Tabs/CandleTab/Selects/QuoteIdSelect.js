import React,{useEffect, useState} from 'react'
import CustomSelect from './CustomSelect';

import UseFetch from '../../../../use-fetch.effect';

function QuoteIdSelect(props) {
    let data=UseFetch("https://api.coincap.io/v2/markets");
    const [quoteData, setQuoteData] =useState([]);
    const {quoteId, setQuoteId} = props.urlParams;

    useEffect(() => {
        let distinctive;
        if(data){
            distinctive = [...new Set (data.map(item=> item.quoteId ))].map(item=> ({value: item, label: item}))
        }

        setQuoteData(distinctive)
       
    }, [data]);
  return (
    <CustomSelect options={quoteData} onChange={(e)=> setQuoteId(e.value)}/>
  )
}

export default QuoteIdSelect




