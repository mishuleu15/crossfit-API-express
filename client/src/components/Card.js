import React from 'react';
import Wrapper from '../assets/wrappers/Card';

import axios from 'axios';

import { useAppContext } from '../Context/appContext';

const Card = ({
  id,
  name,
  mode,
  equipment,
  exercises,
  trainerTips,
  dataChange,
  editMode,
  data,
}) => {
  const { getTraining } = useAppContext();

  const handleChangeDelete = async () => {
    console.log('clicked');
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/workouts/${id}`
      );
      dataChange(res);
    } catch (error) {
      console.log(error);
    }
  };

  const prefillFormData = async () => {
    const res = await data.find((ele) => {
      return ele.id === id;
    });
    return res;
  };

  const handleChangeUpdate = () => {
    const res = prefillFormData();
    editMode(true, id, res);
    getTraining(id);
  };

  return (
    <Wrapper>
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
        </div>
      </div>
      <button onClick={handleChangeDelete}>Delete</button>
      <button onClick={handleChangeUpdate}>Update</button>
    </Wrapper>
  );
};

export default Card;
