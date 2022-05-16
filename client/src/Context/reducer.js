import { initialState } from './appContext';

import {
  SETUP_TRAINING_BEGIN,
  SETUP_TRAINING_SUCCESS,
  SETUP_TRAINING_ERROR,
  GET_TRAINING_BEGIN,
  GET_TRAINING_SUCCESS,
  GET_TRAINING_ERROR,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SETUP_TRAINING_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_TRAINING_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      name: action.payload.name,
      mode: action.payload.mode,
      equipment: action.payload.equipment,
      exercises: action.payload.exercises,
      trainerTips: action.payload.trainerTips,
    };
  }
  if (action.type === SETUP_TRAINING_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_TRAINING_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_TRAINING_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      name: action.payload.name,
      mode: action.payload.mode,
      equipment: action.payload.equipment,
      exercises: action.payload.exercises,
      trainerTips: action.payload.trainerTips,
    };
  }
  if (action.type === GET_TRAINING_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
};

export default reducer;
