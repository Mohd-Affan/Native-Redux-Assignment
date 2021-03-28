import {GET_ITEMS, ADD_ITEMS, UPDATE_ITEMS, DELETE_ITEMS} from './types';

export const getData = () => async (dispatch) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await data.json();
  dispatch({
    type: GET_ITEMS,
    payload: response,
  });
};

export const addData = (data) => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const newData = await response.json();
  console.log('Added data Successfully');
  console.log(newData);
  dispatch({
    type: ADD_ITEMS,
    payload: {...newData, ...data},
  });
};

export const editData = (data) => (dispatch) => {
  const {id} = data;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('Updated Data Successfully ', res);
      return dispatch({
        type: UPDATE_ITEMS,
        payload: res,
      });
    });
};

export const deleteData = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
    .then((res) =>
      dispatch({
        type: DELETE_ITEMS,
        payload: id,
      }),
    )
    .catch((error) => console.log(error));
};
