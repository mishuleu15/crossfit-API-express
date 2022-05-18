import {
  SETUP_TRAINING_BEGIN,
  SETUP_TRAINING_SUCCESS,
  SETUP_TRAINING_ERROR,
  GET_TRAINING_BEGIN,
  GET_TRAINING_SUCCESS,
  GET_TRAINING_ERROR,
  SETUP_GET_TRAININGS_BEGIN,
  SETUP_GET_TRAININGS_SUCCESS,
  SETUP_GET_TRAININGS_ERROR,
  POST_TRAINING_BEGIN,
  POST_TRAINING_SUCCESS,
  POST_TRAINING_ERROR,
  DELETE_TRAINING_BEGIN,
  DELETE_TRAINING_SUCCESS,
  DELETE_TRAINING_ERROR,
  HANDLE_CHANGE,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SETUP_TRAINING_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_TRAINING_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      msg: action.payload,
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

  if (action.type === SETUP_GET_TRAININGS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_GET_TRAININGS_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      trainings: action.payload.data,
    };
  }
  if (action.type === SETUP_GET_TRAININGS_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === POST_TRAINING_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === POST_TRAINING_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      msg: action.payload,
    };
  }
  if (action.type === POST_TRAINING_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === DELETE_TRAINING_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_TRAINING_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      msg: action.payload,
    };
  }
  if (action.type === DELETE_TRAINING_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
};

export default reducer;
