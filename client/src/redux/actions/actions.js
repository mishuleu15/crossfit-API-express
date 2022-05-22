import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import axios from 'axios';

export const getPosts = () => async (dispatch) => {
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
