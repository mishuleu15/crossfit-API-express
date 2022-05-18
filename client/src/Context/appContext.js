import React, { useReducer, useContext } from 'react';
import { fetchData } from '../utils/fetchData';

import reducer from './reducer';
import axios from 'axios';

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
  HANDLE_CHANGE,
  DELETE_TRAINING_BEGIN,
  DELETE_TRAINING_SUCCESS,
  DELETE_TRAINING_ERROR,
} from './actions';

const initialState = {
  isLoading: false,
  name: '',
  mode: '',
  equipment: [],
  exercises: [],
  trainerTips: [],
  trainings: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllTrainings = async () => {
    dispatch({ SETUP_GET_TRAININGS_BEGIN });
    try {
      const data = await fetchData();

      dispatch({
        type: SETUP_GET_TRAININGS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        SETUP_GET_TRAININGS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const postTraining = async ({ values }) => {
    dispatch({ POST_TRAINING_BEGIN });
    try {
      await axios.post(`http://localhost:4000/api/v1/workouts`, values);

      dispatch({
        type: POST_TRAINING_SUCCESS,
        payload: { msg: 'success' },
      });
    } catch (error) {
      dispatch({
        POST_TRAINING_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const setupTraining = async ({ values, getId }) => {
    dispatch({ SETUP_TRAINING_BEGIN });
    try {
      await axios.patch(
        `http://localhost:4000/api/v1/workouts/${getId}`,
        values
      );

      dispatch({
        type: SETUP_TRAINING_SUCCESS,

        payload: { msg: 'success' },
      });
    } catch (error) {
      dispatch({
        SETUP_TRAINING_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getTraining = async (getId) => {
    dispatch({ GET_TRAINING_BEGIN });

    try {
      const {
        data: { data },
      } = await axios.get(`http://localhost:4000/api/v1/workouts/${getId}`);

      const { name, mode, equipment, exercises, trainerTips } = data;

      dispatch({
        type: GET_TRAINING_SUCCESS,
        payload: { name, mode, equipment, exercises, trainerTips },
      });
    } catch (error) {
      dispatch({
        GET_TRAINING_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };

  const deleteTraining = async (getId) => {
    dispatch({ DELETE_TRAINING_BEGIN });
    try {
      await axios.delete(`http://localhost:4000/api/v1/workouts/${getId}`);

      dispatch({
        type: DELETE_TRAINING_SUCCESS,

        payload: state.trainings,
      });
    } catch (error) {
      dispatch({
        DELETE_TRAINING_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setupTraining,
        getTraining,
        getAllTrainings,
        postTraining,
        deleteTraining,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
