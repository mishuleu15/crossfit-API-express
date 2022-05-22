import Card from './Card';

import Wrapper from '../assets/wrappers/Cards';

import { useSelector } from 'react-redux';

const Cards = ({ editMode }) => {
  const workouts = useSelector((state) => state);
  return (
    <Wrapper>
      {workouts ? (
        workouts?.map((element) => {
          return <Card key={element._id} {...element} editMode={editMode} />;
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </Wrapper>
  );
};

export default Cards;
