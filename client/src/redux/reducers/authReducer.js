import { REGISTER, LOGOUT_USER, SIGN_UP_ERROR } from '../constants/actionTypes';

const authReducer = (state = { authData: null, message: {} }, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, authData: action?.data };
    case SIGN_UP_ERROR:
      return { ...state, message: action.payload };
    case LOGOUT_USER:
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
