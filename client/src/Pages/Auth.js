import React from 'react';
import Wrapper from '../assets/wrappers/Auth';

const Auth = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            value={''}
            name='name'
            // onChange={(e) =>
            //   setPostWorkout({
            //     ...postWorkout,
            //     name: e.target.value,
            //   })
            // }
          />
        </label>

        <label>
          <p>Email:</p>
          <input
            type='email'
            className={''}
            value={''}
            name='email'
            // onChange={(e) =>
            //   setPostWorkout({
            //     ...postWorkout,
            //     name: e.target.value,
            //   })
            // }
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type='password'
            className={''}
            value={''}
            name='password'
            // onChange={(e) =>
            //   setPostWorkout({
            //     ...postWorkout,
            //     name: e.target.value,
            //   })
            // }
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </Wrapper>
  );
};

export default Auth;
