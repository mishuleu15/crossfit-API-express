import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';

import Wrapper from '../assets/wrappers/Auth';
import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { registerUser, signIn } from './../redux/actions/actions';

import { useNavigate } from 'react-router-dom';

import { CLEAR_MESSAGE } from '../redux/constants/actionTypes';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let alertMessage = useSelector((state) => state?.auth?.message);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const [confirmedPasswordMatch, setConfirmedPasswordMatch] = useState(true);
  const [duplicateUser, setDuplicateUser] = useState(false);

  if (password.length < 6) {
    alertMessage = 'Password must be at least 6 characters long';
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (toString(alertMessage).localeCompare('User Already exists.')) {
      setDuplicateUser(true);
    }

    if (password !== confirmPassword) {
      setConfirmedPasswordMatch(false);
    } else {
      setConfirmedPasswordMatch(true);
    }

    if (isSignup) {
      dispatch(
        registerUser({ name, email, password, confirmPassword }, navigate)
      );
    } else {
      dispatch({ type: CLEAR_MESSAGE });
      dispatch(signIn({ email, password }, navigate));
    }
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setConfirmedPasswordMatch(true);
      setDuplicateUser(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [confirmedPasswordMatch, duplicateUser]);

  console.log({ confirmedPasswordMatch });
  console.log({ duplicateUser });

  return (
    <Wrapper>
      {(!confirmedPasswordMatch || duplicateUser) && (
        <Alert alertMessage={alertMessage} />
      )}
      <h1>Auth</h1>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <label>
            <p>Name:</p>
            <input
              type='text'
              className={''}
              value={name}
              name='name'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        )}

        <label>
          <p>Email:</p>
          <input
            type='email'
            className={''}
            value={email}
            name='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type={'password'}
            value={password}
            name='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {isSignup && (
          <label>
            <p>Confirm Password:</p>
            <input
              name='confirmPassword'
              label='Repeat Password'
              value={confirmPassword}
              type='password'
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        )}
        <button type='submit'>{isSignup ? 'Sign Up' : 'Sign In'}</button>
        <Button onClick={switchMode}>
          {isSignup
            ? 'Already have an account? Sign in'
            : "Don't have an account? Sign Up"}
        </Button>
      </form>
    </Wrapper>
  );
};

export default Auth;
