import React, { useEffect } from 'react';

import Card from './Card';

import { useAppContext } from '../Context/appContext';

import Wrapper from '../assets/wrappers/Cards';

const Cards = ({ editMode }) => {
  const { getAllTrainings, trainings } = useAppContext();

  useEffect(() => {
    getAllTrainings();
  }, []);

  return (
    <Wrapper>
      {trainings ? (
        trainings?.map((element) => {
          return <Card key={element.id} {...element} editMode={editMode} />;
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </Wrapper>
  );
};

export default Cards;
