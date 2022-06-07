import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/NavBar';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, showForm, hideForm } from '../redux/actions/actions';

import { filterPosts, getPosts } from '../redux/actions/actions';

const Navbar = () => {
  const showFormTxt = useSelector((state) => state.users.mobileBtn);
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('user')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  if (query === '') {
    dispatch(getPosts());
  }
  // const token = localStorage.getItem('token');
  // const user = JSON.parse(localStorage.getItem('user'));

  function searchPost() {
    if (query.trim()) {
      dispatch(filterPosts(query));
    }
  }

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      searchPost();
    }
  }

  function logout() {
    if (token) {
      dispatch(logoutUser());
      navigate('/auth');
      setUser(null);
    }
  }

  function toggleBtn() {
    if (showFormTxt === true) {
      dispatch(hideForm(false));
    } else {
      dispatch(showForm(true));
    }
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setToken(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  return (
    <Wrapper>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h2 className='logoContainer'>
            <span className='first'>Workouts</span>{' '}
            <span className='second'>Planner</span>
          </h2>
        </Link>
        <div className='searchInputContainer'>
          <input
            placeholder='Enter Post Title'
            onKeyDown={handleKeyPress}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className='btnSearch' onClick={searchPost}>
            Search
          </button>
        </div>
        {user ? (
          <div className='user'>
            <h3>{user?.name}</h3>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to='/auth' style={{ textDecoration: 'none', display: 'flex' }}>
            <button>Sign Up</button>
          </Link>
        )}
        <div className='btnMobile'>
          <button onClick={toggleBtn}>{showFormTxt ? 'Hide' : 'Show'}</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
