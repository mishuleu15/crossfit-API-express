import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './redux/reducers/workoutReducer';

// const reducer = combineReducers({
//   workoutList: workoutsListReducer,
// });

// const userInfoFromStorage = localStorage.getItem('user')
//   ? JSON.parse(localStorage.getItem('user'))
//   : null;

// const initialState = {
//   workouts: {},
//   userLogin: { userInfo: userInfoFromStorage },
// };

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
