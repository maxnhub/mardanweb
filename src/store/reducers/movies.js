  
import * as types from '../types/movies';

const initialState = {
  movies: [],
  movie: {},
  isMovieLoaded: false,
  isMoviesLoaded: false,
};

export default function moviesReducer(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case types.FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies,
                isMoviesLoaded: true,
            };
        case types.FETCH_MOVIE:
          return {
              ...state,
              movie: action.movie,
              isMovieLoaded: true,
            };
        case types.CLEAR_MOVIES:
            return {
                movies: [],
                isMoviesLoaded: false,
            };
        case types.CLEAR_MOVIE:
            return {
                movie: {},
                isMovieLoaded: false,
            };
        default:
            return state;
    }
}