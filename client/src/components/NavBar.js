import React from 'react';
import Wrapper from '../assets/wrappers/NavBar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/auth');
  }

  return (
    <Wrapper>
      <div className='container'>
        <h2>
          <span className='first'>Workouts</span>{' '}
          <span className='second'>Planner</span>
        </h2>
        <button onClick={handleClick}>Register</button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
