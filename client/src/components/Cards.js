import React from 'react';
import Card from './Card';

import Wrapper from '../assets/wrappers/Cards';

const Cards = ({ data, dataChange, editMode }) => {
  return (
    <Wrapper>
      {data ? (
        data?.map((element) => {
          return (
            <Card
              key={element.id}
              {...element}
              dataChange={dataChange}
              editMode={editMode}
              data={data}
            />
          );
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </Wrapper>
  );
};

export default Cards;
