import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/AddWorkout';

import axios from 'axios';
import { useAppContext, initialState } from '../Context/appContext';

const AddWorkout = ({ dataChange, editModeOn, setEditModeOn, getId, data }) => {
  const { setupTraining } = useAppContext();

  const state = useAppContext();

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log('wtf', state);
  console.log('xxx', values);

  const [submitting, setSubmitting] = useState(false);
  // const [name, setName] = useState('');
  // const [mode, setMode] = useState('');
  // const [equipment, setEquipment] = useState([]);
  // const [exercises, setExercises] = useState([]);
  // const [trainerTips, setTrainerTips] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editModeOn) {
        setupTraining({ values, getId });
      }
    } catch (error) {
      console.log(error.message);
      setSubmitting(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   try {
  //     if (editModeOn) {
  //       const res = await axios.patch(
  //         `http://localhost:4000/api/v1/workouts/${getId}`,
  //         {
  //           name,
  //           mode,
  //           equipment,
  //           exercises,
  //           trainerTips,
  //         }
  //       );
  //       dataChange(res);
  //       clearForm();
  //       setEditModeOn(false);
  //     }
  //     const res = await axios.post('http://localhost:4000/api/v1/workouts/', {
  //       name,
  //       mode,
  //       equipment,
  //       exercises,
  //       trainerTips,
  //     });
  //     clearForm();
  //     dataChange(res);
  //     setSubmitting(false);
  //   } catch (error) {
  //     console.log(error.message);
  //     setSubmitting(false);
  //   }
  // };

  // const clearForm = () => {
  //   setName('');
  //   setMode('');
  //   setEquipment([]);
  //   setExercises([]);
  //   setTrainerTips([]);
  // };

  return (
    <Wrapper>
      {submitting && <p>Submitting Form...</p>}
      {editModeOn && <p>Editing...</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            type='text'
            value={(values.name !== '' ? values.name : state.name) || ''}
            name='name'
            onChange={handleChange}
          />
        </label>

        <label>
          <p>Mode:</p>
          <input
            type='text'
            value={(values.mode !== '' ? values.mode : state.mode) || ''}
            name='mode'
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Equipment:</p>
          <input
            type='text'
            value={
              (values.equipment.length !== 0
                ? values.equipment
                : state.equipment) || ''
            }
            name='equipment'
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Exercises:</p>
          <textarea
            rows='6'
            cols='21'
            value={
              (values.exercises.length !== 0
                ? values.exercises
                : state.exercises) || ''
            }
            name='exercises'
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Trainer Tips:</p>
          <textarea
            rows='6'
            cols='21'
            value={
              (values.trainerTips.length !== 0
                ? values.trainerTips
                : state.trainerTips) || ''
            }
            name='trainerTips'
            onChange={handleChange}
          />
        </label>

        <button type='submit'>{editModeOn ? 'Change' : 'Submit'}</button>
      </form>
      {/* <button onClick={() => test()}></button> */}
    </Wrapper>
  );
};

export default AddWorkout;
