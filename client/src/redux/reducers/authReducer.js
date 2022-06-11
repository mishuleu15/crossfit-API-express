import {
  REGISTER,
  SIGN_IN,
  LOGOUT_USER,
  SIGN_UP_ERROR,
  CLEAR_MESSAGE,
} from '../constants/actionTypes';

const authReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, authData: action?.data };
    case SIGN_IN:
      return { ...state, authData: action?.data };
    case SIGN_UP_ERROR:
      return { ...state, message: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case CLEAR_MESSAGE:
      return { ...state, message: {} };
    default:
      return state;
  }
};

export default authReducer;
