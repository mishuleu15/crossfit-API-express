import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/AddWorkout';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../redux/actions/actions';

const AddWorkout = ({ editModeOn, setEditModeOn, getId, setGetId }) => {
  const [postWorkout, setPostWorkout] = useState({
    name: '',
    mode: '',
    equipment: '',
    exercises: '',
    trainerTips: '',
  });

  const workout = useSelector((state) =>
    getId ? state?.workouts.find((w) => w._id === getId) : null
  );

  useEffect(() => {
    if (workout) setPostWorkout(workout);
  }, [workout]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (getId) {
      dispatch(updatePost(getId, { ...postWorkout }));
      setEditModeOn(false);
    } else {
      dispatch(createPost({ ...postWorkout }));
    }
    clear();
  };

  const clear = () => {
    setGetId(null);
    setPostWorkout({
      name: '',
      mode: '',
      equipment: '',
      exercises: '',
      trainerTips: '',
    });
  };

  return (
    <Wrapper>
      {editModeOn && <p>Editing...</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            type='text'
            className={postWorkout.name.length < 3 ? 'invalid' : 'valid'}
            value={postWorkout.name || ''}
            name='name'
            onChange={(e) =>
              setPostWorkout({
                ...postWorkout,
                name: e.target.value,
              })
            }
          />
        </label>

        <label>
          <p>Mode:</p>
          <input
            type='text'
            className={postWorkout.mode.length < 3 ? 'invalid' : 'valid'}
            value={postWorkout.mode || ''}
            name='mode'
            onChange={(e) =>
              setPostWorkout({
                ...postWorkout,
                mode: e.target.value,
              })
            }
          />
        </label>
        <label>
          <p>Equipment:</p>
          <input
            type='text'
            value={postWorkout.equipment || ''}
            name='equipment'
            onChange={(e) =>
              setPostWorkout({
                ...postWorkout,
                equipment: e.target.value,
              })
            }
          />
        </label>
        <label>
          <p>Exercises:</p>
          <textarea
            rows='6'
            cols='21'
            value={postWorkout.exercises || ''}
            name='exercises'
            onChange={(e) =>
              setPostWorkout({
                ...postWorkout,
                exercises: e.target.value,
              })
            }
          />
        </label>
        <label>
          <p>Trainer Tips:</p>
          <textarea
            rows='6'
            cols='21'
            value={postWorkout.trainerTips || ''}
            name='trainerTips'
            onChange={(e) =>
              setPostWorkout({
                ...postWorkout,
                trainerTips: e.target.value,
              })
            }
          />
        </label>

        <button type='submit'>{editModeOn ? 'Edit' : 'Submit'}</button>
      </form>
    </Wrapper>
  );
};

export default AddWorkout;
