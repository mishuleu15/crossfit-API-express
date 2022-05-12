import React from 'react';
import Wrapper from '../assets/wrappers/Card';

const Card = ({ id, name, mode, equipment, exercises, trainerTips }) => {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <div className='container'>
        <div className='section'>
          <h2>{mode}</h2>
          <ul>
            {equipment.map((equip, idx) => {
              return <li key={idx}>{equip}</li>;
            })}
          </ul>
        </div>
        <div className='section'>
          <h2>Exercises</h2>
          <ul>
            {exercises.map((exe, idx) => {
              return <li key={idx}>{exe}</li>;
            })}
          </ul>
        </div>
        <div className='section'>
          <h2>Trainer Tips</h2>
          <ul>
            {trainerTips.map((tips, idx) => {
              return <li key={idx}>{tips}</li>;
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
