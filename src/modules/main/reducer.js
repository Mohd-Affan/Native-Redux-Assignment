import {
  GET_ITEMS,
  RELEASE,
  OLD,
  MOST_POPULAR,
  LESS_POPULAR,
  HIGHEST_REVENUE,
  LOWEST_REVENUE,
} from './types';

const initialState = {
  data: [],
};
export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {data: action.payload};
    case RELEASE:
      return {data: action.payload};
    case OLD:
      return {data: action.payload};
    case MOST_POPULAR:
      return {data: action.payload};
    case LESS_POPULAR:
      return {data: action.payload};
    case HIGHEST_REVENUE:
      return {data: action.payload};
    case LOWEST_REVENUE:
      return {data: action.payload};
    default:
      return state;
  }
}
