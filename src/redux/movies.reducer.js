import allMovies from '../mock/mock';
import { FETCH_MOVIES } from './action-types';

const initialState = {
  movieList: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movieList: allMovies };
    default:
      return state;
  }
};
