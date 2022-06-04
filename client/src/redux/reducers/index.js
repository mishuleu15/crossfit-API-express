import { combineReducers } from 'redux';

import workouts from './workoutReducer';
import auth from './authReducer';
import users from './userReducer';

export default combineReducers({
  workouts,
  auth,
  users,
});
