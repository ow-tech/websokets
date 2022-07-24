import React from 'react'
import CustomSelect from './CustomSelect';


function Interval(props) {

  const {interval, setInterval} = props.urlParams;
    // interval m1, m5, m15, m30, h1, h2, h4, h8, h12, d1, w1
    let options =[
        {value: 'm1', label: '1 minunte'},
        {value: 'm5', label: '5 minuntes'},
        {value: 'm15', label: '15 minuntes'},
        {value: 'm30', label: '30 minuntes'},
        {value: 'h1', label: '1 hour'},
        {value: 'h2', label: '2 hours'},
        {value: 'h4', label: '4 hours'},
        {value: 'h8', label: '8 hours'},
        {value: 'h12', label: '12 hours'},
        {value: 'd1', label: '1 day'},
        {value: 'w1', label: '1 week'},
    ]
  return (
    <CustomSelect options={options} onChange={(e)=> setInterval(e.value)}/>
  )
}

export default Interval