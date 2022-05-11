import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
  return (
    <div>
      {data ? (
        data?.map((element) => {
          return <Card key={element.id} {...element} />;
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default Cards;
