
import React, { Fragment } from "react";
import Select, { components } from "react-select";


function CustomSelect({options, onChange, value}) {
  return (
    <div styles={{width: '20px'}}>
    <Select options={options} onChange={onChange} value={value}/>
  </div>
  )
}

export default CustomSelect