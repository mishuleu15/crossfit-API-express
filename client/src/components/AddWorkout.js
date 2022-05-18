import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/AddWorkout';

import { useAppContext } from '../Context/appContext';

const AddWorkout = ({ editModeOn, setEditModeOn, getId }) => {
  const {
    setupTraining,
    postTraining,
    getAllTrainings,
    handleChange,
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  } = useAppContext();

  let values = { name, mode, equipment, exercises, trainerTips };

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleTrainingInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllTrainings();
    try {
      if (editModeOn) {
        setupTraining({ values, getId });
        setEditModeOn(false);
        return;
      }
      postTraining({ values });
      clearForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearForm = () => {
    values = {};
  };

  return (
    <Wrapper>
      {editModeOn && <p>Editing...</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            type='text'
            value={name || ''}
            name='name'
            onChange={handleTrainingInput}
          />
        </label>

        <label>
          <p>Mode:</p>
          <input
            type='text'
            value={mode || ''}
            name='mode'
            onChange={handleTrainingInput}
          />
        </label>
        <label>
          <p>Equipment:</p>
          <input
            type='text'
            value={equipment || ''}
            name='equipment'
            onChange={handleTrainingInput}
          />
        </label>
        <label>
          <p>Exercises:</p>
          <textarea
            rows='6'
            cols='21'
            value={exercises || ''}
            name='exercises'
            onChange={handleTrainingInput}
          />
        </label>
        <label>
          <p>Trainer Tips:</p>
          <textarea
            rows='6'
            cols='21'
            value={trainerTips || ''}
            name='trainerTips'
            onChange={handleTrainingInput}
          />
        </label>

        <button type='submit'>{editModeOn ? 'Change' : 'Submit'}</button>
      </form>
    </Wrapper>
  );
};

export default AddWorkout;
