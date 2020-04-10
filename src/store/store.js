import { createStore, combineReducers } from 'redux';

import usersReducer from './reducers/users'
import moviesReducer from './reducers/movies'

export const store = createStore(combineReducers({
  users: usersReducer,
  movies: moviesReducer,
}));
