import React, { useState, useEffect, useRef } from 'react';

import Cards from './components/Cards';
import AddWorkout from './components/AddWorkout';

import Wrapper from './assets/wrappers/Home';

import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/actions';
import { useSelector } from 'react-redux';

const Home = () => {
  const workouts = useSelector((state) => state.auth.message);
  console.log({ workouts });

  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const [editModeOn, setEditModeOn] = useState(false);
  const [getId, setGetId] = useState(null);

  const editMode = (param, id) => {
    setEditModeOn(param);
    setGetId(id);
  };

  const toTop = () => {
    return containerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  if (getId) {
    toTop();
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>CrossFit Workout of the Day</h1>
      <div className='container' ref={containerRef}>
        <AddWorkout
          editModeOn={editModeOn}
          setEditModeOn={setEditModeOn}
          setGetId={setGetId}
          getId={getId}
        />
        <Cards editMode={editMode} />
      </div>
    </Wrapper>
  );
};

export default Home;
