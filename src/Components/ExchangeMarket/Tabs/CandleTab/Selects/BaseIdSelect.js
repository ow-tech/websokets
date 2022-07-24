import React,{useEffect, useState} from 'react'
import CustomSelect from './CustomSelect';

import UseFetch from '../../../../use-fetch.effect';

function BaseIdSelect(props) {

    let data=UseFetch("https://api.coincap.io/v2/markets");
    const [baseData, setBaseData] =useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    const {baseId, setBaseId} = props.urlParams;

    // const handleChange = e => {
    //   console.log(e.value)
    //   setSelectedValue(e.value);
    // }
    useEffect(() => {
        let distinctive;
        if(data){
            distinctive = [...new Set (data.map(item=> item.baseId ))].map(item=> ({value: item, label: item}))
        }

        setBaseData(distinctive)
       
       
    }, [data]);
  return (
    <CustomSelect options={baseData} onChange={(e)=> setBaseId(e.value)} />
  )
}

export default BaseIdSelect