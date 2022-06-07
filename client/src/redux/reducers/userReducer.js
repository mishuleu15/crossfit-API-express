import { SHOW_FORM, HIDE_FORM } from '../constants/actionTypes';

const authReducer = (state = { mobileBtn: false }, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return { ...state, mobileBtn: action.payload };
    case HIDE_FORM:
      return { ...state, mobileBtn: action.payload };
    default:
      return state;
  }
};

export default authReducer;
