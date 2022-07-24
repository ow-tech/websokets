import React, {useEffect, useState} from 'react'

import UseFetch from '../use-fetch.effect';

// importing table and components from antd

import { Table } from 'antd';
import qs from 'qs';

// colums setting
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
      title: 'Name',
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: 'Percent Total Volume',
      dataIndex: 'percentTotalVolume',
    },
    {
        title: 'Volume USD',
        dataIndex: 'volumeUsd',
      },
      {
        title: 'Trading Pairs',
        dataIndex: 'tradingPairs',
      },
  ];

  const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });


function Exchanges() {

    // 
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
      current: 1,
      pageSize: 10,
    });


    // const exchangesData =()=> UseFetch(
    //         `https://api.coincap.io/v2/exchanges?${qs.stringify(getRandomuserParams(params))}`
    //       )


    
      const fetchData = async (params = {}) => {
        setLoading(true);
        
       const res = await fetch(`https://api.coincap.io/v2/exchanges?${qs.stringify(getRandomuserParams(params))}`)
        const dataArray = await res.json()
        setData(dataArray.data);
            setLoading(false);
            setPagination({
              ...params.pagination,
              total: dataArray.data.length, 
              // total: data.totalCount,
            }
           
            );
    
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
}, []);   
      

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.name}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  )
}

export default Exchanges