import React, { useState, useEffect } from 'react';

import Cards from './components/Cards';
import AddWorkout from './components/AddWorkout';

import Wrapper from './assets/wrappers/Home';

import { useAppContext } from './Context/appContext';

const Home = () => {
  console.log('home');
  const [editModeOn, setEditModeOn] = useState(false);
  const [getId, setGetId] = useState(null);

  const editMode = (param, id) => {
    setEditModeOn(param);
    setGetId(id);
  };

  return (
    <Wrapper>
      <h1>CrossFit Workout of the Day</h1>
      <div className='container'>
        <AddWorkout
          editModeOn={editModeOn}
          setEditModeOn={setEditModeOn}
          getId={getId}
        />
        <Cards editMode={editMode} />
      </div>
    </Wrapper>
  );
};

export default Home;
