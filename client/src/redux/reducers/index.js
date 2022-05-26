import { combineReducers } from 'redux';

import workouts from './workoutReducer';
import auth from './authReducer';

export default combineReducers({
  workouts,
  auth,
});
