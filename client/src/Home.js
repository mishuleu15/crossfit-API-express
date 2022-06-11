import React, { useState, useEffect, useRef } from 'react';

import Cards from './components/Cards';
import AddWorkout from './components/AddWorkout';

import Wrapper from './assets/wrappers/Home';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getUsers } from './redux/actions/actions';

import { SpinnerCircularSplit } from 'spinners-react';

const Home = () => {
  const workouts = useSelector((state) => state.workouts);
  const userLoggedIn = JSON.parse(localStorage.getItem('user'));

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
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>CrossFit Workout of the Day</h1>
      <div className='spinner'>
        {workouts.length === 0 && (
          <SpinnerCircularSplit size={200} className='spinner' />
        )}
      </div>

      <div
        className={userLoggedIn ? 'container' : 'containerAfterLogged'}
        ref={containerRef}
      >
        {userLoggedIn && (
          <AddWorkout
            editModeOn={editModeOn}
            setEditModeOn={setEditModeOn}
            setGetId={setGetId}
            getId={getId}
          />
        )}

        <Cards editMode={editMode} />
      </div>
    </Wrapper>
  );
};

export default Home;
