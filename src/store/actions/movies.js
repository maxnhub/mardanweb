import * as types from '../types/movies';

export function fetchMovies(movies) {
    return {
        type: types.FETCH_MOVIES,
        movies
    };
}


export function fetchMovie(movie) {
  return {
      type: types.FETCH_MOVIE,
      movie
  };
}

export function clearMovies(movies) {
    return {
        type: types.CLEAR_MOVIES,
        movies
    };
}


export function clearMovie(movie) {
    return {
        type: types.CLEAR_MOVIE,
        movie
    };
}


