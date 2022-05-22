import React from 'react';
import Wrapper from '../assets/wrappers/NavBar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2>
          <span className='first'>Workouts</span>{' '}
          <span className='second'>Planner</span>
        </h2>
        <button>Logout</button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
