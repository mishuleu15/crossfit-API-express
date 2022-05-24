import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Auth';

import { useDispatch } from 'react-redux';
import { registerUser } from './../redux/actions/actions';

import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Wrapper>
      <h1>Auth</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            type='text'
            className={''}
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <p>Email:</p>
          <input
            type='email'
            className={''}
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type='password'
            className={''}
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </Wrapper>
  );
};

export default Auth;
