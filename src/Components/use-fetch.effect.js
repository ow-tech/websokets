import { useState, useEffect } from 'react';

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     
      const res = await fetch(url);
      const dataArray = await res.json();
      // console.log(dataArray);
      setData(dataArray.data);
    };

    fetchData();
  }, [url]);

  return data;
};

export default UseFetch;