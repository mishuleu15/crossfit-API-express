import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/AddWorkout';

import axios from 'axios';

const AddWorkout = ({ dataChange, editModeOn, setEditModeOn, getId, data }) => {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [mode, setMode] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [trainerTips, setTrainerTips] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editModeOn) {
        const res = await axios.patch(
          `http://localhost:4000/api/v1/workouts/${getId}`,
          {
            name,
            mode,
            equipment,
            exercises,
            trainerTips,
          }
        );
        dataChange(res);
        clearForm();
        setEditModeOn(false);
      }
      const res = await axios.post('http://localhost:4000/api/v1/workouts/', {
        name,
        mode,
        equipment,
        exercises,
        trainerTips,
      });
      clearForm();
      dataChange(res);
      setSubmitting(false);
    } catch (error) {
      console.log(error.message);
      setSubmitting(false);
    }
  };

  const clearForm = () => {
    setName('');
    setMode('');
    setEquipment([]);
    setExercises([]);
    setTrainerTips([]);
  };

  return (
    <Wrapper>
      {submitting && <p>Submitting Form...</p>}
      {editModeOn && <p>Editing...</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            type='text'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <p>Mode:</p>
          <input
            type='text'
            value={mode}
            mode='mode'
            onChange={(e) => setMode(e.target.value)}
          />
        </label>
        <label>
          <p>Equipment:</p>
          <input
            type='text'
            value={equipment}
            mode='mode'
            onChange={(e) => setEquipment([e.target.value])}
          />
        </label>
        <label>
          <p>Exercises:</p>
          <textarea
            rows='6'
            cols='21'
            value={exercises}
            mode='mode'
            onChange={(e) => setExercises([e.target.value])}
          />
        </label>
        <label>
          <p>Trainer Tips:</p>
          <textarea
            rows='6'
            cols='21'
            value={trainerTips}
            mode='mode'
            onChange={(e) => setTrainerTips([e.target.value])}
          />
        </label>

        <button type='submit'>{editModeOn ? 'Change' : 'Submit'}</button>
      </form>
      {/* <button onClick={() => test()}></button> */}
    </Wrapper>
  );
};

export default AddWorkout;
