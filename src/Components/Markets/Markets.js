import React, {useEffect, useState} from 'react'

import UseFetch from '../use-fetch.effect';


// importing table and components from antd

import { Table } from 'antd';
import qs from 'qs';

// colums setting
// filter variable declaration
let filtering = []
const columns = [
    {
        title: 'rank',
        dataIndex: 'rank',
        sorter: {
            compare: (a, b) => a.rank - b.rank,
            multiple: 1,
          },
        width: '20%',
      },
    {
      title: 'Base Symbol',
      dataIndex: 'baseSymbol',
      width: '20%',
    },
    {
      title: 'Base ID',
      dataIndex: 'baseId',
    },
    {
        title: 'Quote Symbol',
        dataIndex: 'quoteSymbol',
      },
      {
        title: 'Quote ID',
        dataIndex: 'quoteId',
        filters: [
          {
            "text":'tether',
            "value": 'tether',
          },
          {
            "text":'bitcoin',
            "value": 'bitcoin',
          },
          {
            "text":'ethereum',
            "value": 'ethereum',
          },
          {
            "text":'usd-coin',
            "value": 'usd-coin',
          }
        ],
        onFilter: (value, record) => record.quoteId.includes(value),
      },
      {
        title: 'Price Quote',
        dataIndex: 'priceQuote',
      },
      {
        title: 'Price USD',
        dataIndex: 'priceUsd',
      },
      {
        title: 'Volume Usd 24 Hr',
        dataIndex: 'volumeUsd24Hr',
      },
  ];

  const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });


function Markets() {

    //  {/* <Exchanges />
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
      current: 1,
      pageSize: 10,
    });


    const exchangesData = UseFetch(
            `https://api.coincap.io/v2/markets`,)
    // console.log(exchangesData)


   
      const fetchData = async (params = {}) => {
        setLoading(true);
      
        const res = await fetch(`https://api.coincap.io/v2/markets?${qs.stringify(getRandomuserParams(params))}`);
        
        
        const dataArray = await res.json();
      //  console.log(dataArray)
       
        setData(dataArray.data);
            setLoading(false);
            setPagination({
              ...params.pagination,
              total: dataArray.data.length, 
              // total: data.totalCount,
            }
           
            );
           
              filtering = await dataArray.data.map(item => ( {
                "text":item.quoteId,
                "value": item.quoteId,
              })
              )          
    
      };

      const handleTableChange = (newPagination, filters, sorter) => {
        fetchData({
          sortField: sorter.field,
          sortOrder: sorter.order,
          pagination: newPagination,
          ...filters,
        });
      };
    
useEffect(() => {
    fetchData({
        pagination,
      });
      console.log(filtering)
    
      
}, [], [data]);   
      

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.baseSymbol + record.quoteSymbol +record.quoteId + record.baseId}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  )
}

export default Markets;