import Wrapper from '../assets/wrappers/Card';

import { useAppContext } from '../Context/appContext';

const Card = ({
  id,
  name,
  mode,
  equipment,
  exercises,
  trainerTips,
  editMode,
}) => {
  const { getTraining, getAllTrainings, deleteTraining } = useAppContext();

  const handleChangeDelete = () => {
    deleteTraining(id);
    getAllTrainings();
  };

  const handleChangeUpdate = () => {
    editMode(true, id);
    getTraining(id);
    getAllTrainings();
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
