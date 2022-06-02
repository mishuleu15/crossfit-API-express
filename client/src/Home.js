import React, { useState, useEffect, useRef } from 'react';

import Cards from './components/Cards';
import AddWorkout from './components/AddWorkout';

import Wrapper from './assets/wrappers/Home';

import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/actions';

const Home = () => {
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
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>CrossFit Workout of the Day</h1>

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
