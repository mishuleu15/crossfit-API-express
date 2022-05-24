import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAIL,
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  REGISTER,
  LOGOUT_USER,
} from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (workouts, action) => {
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
    case REGISTER:
      return [...workouts];
    case LOGOUT_USER:
      return [...workouts];
    default:
      return workouts;
  }
};

// export const workoutsListReducer =(state = {}) =>{
//   switch (action.type) {

//   }
// }
