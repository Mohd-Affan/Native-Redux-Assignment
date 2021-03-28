import {GET_ITEMS, ADD_ITEMS, UPDATE_ITEMS, DELETE_ITEMS} from './types';
const initialState = {
  data: [],
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {data: action.payload};
    case ADD_ITEMS: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case UPDATE_ITEMS: {
      return {
        data: state.data.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
      };
    }
    case DELETE_ITEMS: {
      return {
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
