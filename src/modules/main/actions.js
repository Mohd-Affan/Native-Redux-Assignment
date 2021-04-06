import {
  GET_ITEMS,
  RELEASE,
  OLD,
  MOST_POPULAR,
  LESS_POPULAR,
  HIGHEST_REVENUE,
  LOWEST_REVENUE,
} from './types';
export const getData = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  );

  const response = await data.json();
  dispatch({
    type: GET_ITEMS,
    payload: response.results,
  });
};

export const release = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1',
  );
  const response = await data.json();
  dispatch({
    type: RELEASE,
    payload: response.results,
  });
};

export const old = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1',
  );
  const response = await data.json();
  dispatch({
    type: OLD,
    payload: response.results,
  });
};

export const mostPopular = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1',
  );
  const response = await data.json();
  dispatch({
    type: MOST_POPULAR,
    payload: response.results,
  });
};

export const lessPopular = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  );
  const response = await data.json();
  dispatch({
    type: LESS_POPULAR,
    payload: response.results,
  });
};

export const highestRevenue = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1',
  );
  const response = await data.json();
  dispatch({
    type: HIGHEST_REVENUE,
    payload: response.results,
  });
};

export const lowestReveneue = () => async (dispatch) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2d1c7babec897dc17de1910dfec96fb&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1',
  );
  const response = await data.json();
  dispatch({
    type: LOWEST_REVENUE,
    payload: response.results,
  });
};
