import { createStore } from 'redux';
// import UsersReducer from './reducers/users'
// import { combineReducers } from '../store/reducers/index'

import { combineReducers } from 'redux'
import usersReducer from './reducers/users'
import moviesReducer from './reducers/movies'

export const store = createStore(moviesReducer);