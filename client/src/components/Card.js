import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Card';

import Alert from '../components/Alert';

import { useDispatch } from 'react-redux';

import { deletePost } from '../redux/actions/actions';

const Card = ({
  _id,
  name,
  mode,
  equipment,
  exercises,
  trainerTips,
  editMode,
  createdBy,
  userCreator,
}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const { _id: userId } = JSON.parse(localStorage.getItem('user')) || '';

  const handleChangeDelete = () => {
    if (createdBy === userId) {
      dispatch(deletePost(_id));
    } else {
      setMessage("You can't delete post");
    }
  };

  const handleChangeUpdate = () => {
    if (createdBy === userId) {
      editMode(true, _id);
    } else {
      setMessage("You can't update post");
    }
  };

  useEffect(() => {
    let message = setTimeout(() => {
      setMessage('');
    }, 1000);
    return () => {
      clearTimeout(message);
    };
  }, [message]);

  return (
    <Wrapper>
      <h4 className='warningMessage'>
        {message && <Alert alertMessage={message} />}
      </h4>
      <div className='btns'>
        <button className='updateBtn' onClick={handleChangeUpdate}>
          Edit Workout
        </button>
        <button className='deleteBtn' onClick={handleChangeDelete}>
          X
        </button>
      </div>
      <h2 className='title'>{name}</h2>
      <div className='container'>
        <div className='section'>
          <h2>{mode}</h2>
          <ul>
            {typeof equipment === 'object'
              ? equipment?.map((equip, idx) => {
                  return <li key={idx}>{equip}</li>;
                })
              : equipment}
          </ul>
        </div>
        <div className='section'>
          <h2>Exercises</h2>
          <ul>
            {typeof exercises === 'object'
              ? exercises?.map((exe, idx) => {
                  return <li key={idx}>{exe}</li>;
                })
              : exercises}
          </ul>
        </div>
        <div className='section'>
          <h2>Trainer Tips</h2>
          <ul>
            {typeof trainerTips === 'object'
              ? trainerTips?.map((tips, idx) => {
                  return <li key={idx}>{tips}</li>;
                })
              : trainerTips}
          </ul>
          <h2>Created By {userCreator ? userCreator : 'Anonym'}</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
