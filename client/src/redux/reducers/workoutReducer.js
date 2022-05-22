import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (workouts = [], action) => {
  switch (action.type) {
    case UPDATE:
      return workouts.map((workout) =>
        workout._id === action.payload._id ? action.payload : workout
      );

    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...workouts, action.payload];
    case DELETE:
      return (workouts = action.payload);
    default:
      return workouts;
  }
};
