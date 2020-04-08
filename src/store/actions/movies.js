import * as types from '../types/movies';

export function fetchMovies(movies) {
    return {
        type: types.FETCH_MOVIES,
        movies
    };
}


export function fetchMovie(index) {
  return {
      type: types.FETCH_MOVIE,
      index
  };
}



