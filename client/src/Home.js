import './Home.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from './utils/fetchData';

import Cards from './components/Cards';

const Home = () => {
  const [getData, setGetData] = useState();

  const getDataApi = async () => {
    const data = await fetchData();
    setGetData(data);
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div className='App'>
      <h1>testing</h1>
      <Cards data={getData} />
    </div>
  );
};

export default Home;
