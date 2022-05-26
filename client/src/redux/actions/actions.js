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
  SIGN_UP_ERROR,
} from '../constants/actionTypes';
import axios from 'axios';

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getPosts = () => async (dispatch) => {
  console.log('wtf');
  try {
    const { data } = await axios.get('http://localhost:4000/api/v1/workouts');

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  const { equipment, exercises, mode, name, trainerTips } = post;
  try {
    const { data } = await axios.post(`http://localhost:4000/api/v1/workouts`, {
      equipment,
      exercises,
      mode,
      name,
      trainerTips,
    });

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (getId, post) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.patch(
      `http://localhost:4000/api/v1/workouts/${getId}`,
      post
    );

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (getId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/workouts/${getId}`
    );

    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const registerUser = (user, navigate) => async (dispatch) => {
  const { name, email, password, confirmPassword } = user;
  try {
    const {
      data: { data },
    } = await axios.post(`http://localhost:4000/api/v1/auth`, {
      name,
      email,
      password,
      confirmPassword,
    });

    const { user, token } = data;
    addUserToLocalStorage({ user, token });
    navigate('/');

    dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    dispatch({ type: SIGN_UP_ERROR, payload: error.response.data.message });
    console.log(error.response.data.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  removeUserFromLocalStorage();
};
