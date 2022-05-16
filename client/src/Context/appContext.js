import React, { useReducer, useContext } from 'react';

import reducer from './reducer';
import axios from 'axios';

import {
  SETUP_TRAINING_BEGIN,
  SETUP_TRAINING_SUCCESS,
  SETUP_TRAINING_ERROR,
  GET_TRAINING_BEGIN,
  GET_TRAINING_SUCCESS,
  GET_TRAINING_ERROR,
} from './actions';

const initialState = {
  isLoading: false,
  name: '',
  mode: '',
  equipment: [],
  exercises: [],
  trainerTips: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setupTraining = async ({ values, getId }) => {
    console.log(values);
    dispatch({ SETUP_TRAINING_BEGIN });
    try {
      const {
        data: { data },
      } = await axios.patch(
        `http://localhost:4000/api/v1/workouts/${getId}`,
        values
      );

      const { name, mode, equipment, exercises, trainerTips } = data;

      dispatch({
        type: SETUP_TRAINING_SUCCESS,
        payload: { name, mode, equipment, exercises, trainerTips },
      });
    } catch (error) {
      dispatch({
        SETUP_TRAINING_ERROR,
        // payload: { msg: error.response.data.msg },
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

  return (
    <AppContext.Provider value={{ ...state, setupTraining, getTraining }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
