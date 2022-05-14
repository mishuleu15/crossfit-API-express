import React, { useEffect, useState } from 'react';
import { fetchData } from './utils/fetchData';

import Cards from './components/Cards';
import AddWorkout from './components/AddWorkout';

import Wrapper from './assets/wrappers/Home';

const Home = () => {
  const [getData, setGetData] = useState('');
  const [addedData, setAddedData] = useState('');
  const [editModeOn, setEditModeOn] = useState(false);
  const [getId, setGetId] = useState(null);
  const [objToUpdate, setObjToUpdate] = useState({});

  const getDataApi = async () => {
    const data = await fetchData();
    setGetData(data);
  };

  const dataChange = (param) => {
    setAddedData(param);
  };

  const editMode = (param, id, res) => {
    setEditModeOn(param);
    setGetId(id);
    setObjToUpdate(res);
  };

  useEffect(() => {
    getDataApi();
  }, [addedData]);

  return (
    <Wrapper>
      <h1>CrossFit Workout of the Day</h1>
      <div className='container'>
        <AddWorkout
          dataChange={dataChange}
          editModeOn={editModeOn}
          setEditModeOn={setEditModeOn}
          data={objToUpdate}
          getId={getId}
        />
        <Cards data={getData} dataChange={dataChange} editMode={editMode} />
      </div>
    </Wrapper>
  );
};

export default Home;
