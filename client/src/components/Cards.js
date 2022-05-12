import React from 'react';
import Card from './Card';

import Wrapper from '../assets/wrappers/Cards';

const Cards = ({ data }) => {
  return (
    <Wrapper>
      {data ? (
        data?.map((element) => {
          return <Card key={element.id} {...element} />;
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </Wrapper>
  );
};

export default Cards;
