import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAIL,
  FETCH_ALL,
  FETCH_ALL_USERS,
  CREATE,
  UPDATE,
  DELETE,
  REGISTER,
  LOGOUT_USER,
  SIGN_UP_ERROR,
  SEARCH,
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
  try {
    const { data } = await axios.get('http://localhost:3001/api/v1/workouts');

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterPosts = (value) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/v1/workouts/search?searchQuery=${value}`
    );

    dispatch({ type: SEARCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  const { equipment, exercises, mode, name, trainerTips, userCreator } = post;
  const token = localStorage.getItem('token');

  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `http://localhost:3001/api/v1/workouts`,
      {
        equipment,
        exercises,
        mode,
        name,
        trainerTips,
        userCreator,
      },
      config
    );

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (getId, post) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.patch(
      `http://localhost:3001/api/v1/workouts/${getId}`,
      post
    );

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (getId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:3001/api/v1/workouts/${getId}`
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
    } = await axios.post(`http://localhost:3001/api/v1/auth/register`, {
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
    console.log(error.response.data.message);
    dispatch({ type: SIGN_UP_ERROR, payload: error.response.data.message });
  }
};

export const signIn = (user, navigate) => async (dispatch) => {
  const { email, password } = user;
  try {
    const { data } = await axios.post(`http://localhost:3001/api/v1/auth`, {
      email,
      password,
    });

    const { userLoggedIn: user, token } = data;

    addUserToLocalStorage({ user, token });
    navigate('/');
    dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    dispatch({ type: SIGN_UP_ERROR, payload: error.response.data.message });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:3001/api/v1/user');
    console.log(data);

    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  removeUserFromLocalStorage();
};
