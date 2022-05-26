import React, { useState } from 'react';
import Alert from '../components/Alert';

import Wrapper from '../assets/wrappers/Auth';
import { Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { registerUser } from './../redux/actions/actions';

import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const alertMessage = useSelector((state) => state.auth.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmedPasswordMatch, setConfirmedPasswordMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmedPasswordMatch(false);
    } else {
      setConfirmedPasswordMatch(true);
    }

    if (isSignup) {
      dispatch(
        registerUser({ name, email, password, confirmPassword }, navigate)
      );
    }
  };

  const handleShowPassword = () => {
    return setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Wrapper>
      {!confirmedPasswordMatch && <Alert alertMessage={alertMessage} />}
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
            type={showPassword ? 'text' : 'password'}
            className={''}
            value={password}
            name='password'
            handleShowPassword={handleShowPassword}
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
