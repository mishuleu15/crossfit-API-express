import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/NavBar';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/actions';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('user')));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const token = localStorage.getItem('token');
  // const user = JSON.parse(localStorage.getItem('user'));

  function logout() {
    if (token) {
      dispatch(logoutUser());
    }
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setToken(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Wrapper>
      <div className='container'>
        <h2>
          <span className='first'>Workouts</span>{' '}
          <span className='second'>Planner</span>
        </h2>
        {user ? (
          <div className='user'>
            <h3>{user?.name}</h3>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className='registerBtn'>
            <button component={Link} to='/auth'>
              Register
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
