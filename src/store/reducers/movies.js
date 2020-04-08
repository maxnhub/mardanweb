  
import * as types from '../types/movies';

const initialState = {
  movies: [],
  movie: {}
};

export default function moviesReducer(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case types.FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        case types.FETCH_MOVIE:
          return {
              ...state,
              movie: action.movie
          };
        default:
            return state;
    }
}
