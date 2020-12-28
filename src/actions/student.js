import {
  ADD_STUDENT, GET_STUDENTS, UPDATE_STUDENT, DELETE_STUDENT,
} from './types';

export const add = (student) => (dispatch) => dispatch({
  type: ADD_STUDENT,
  payload: student,
});

export const get = () => (dispatch) => dispatch({
  type: GET_STUDENTS,
});

export const update = (newData) => (dispatch) => dispatch({
  type: UPDATE_STUDENT,
  payload: newData,
});

export const deleteS = (id) => (dispatch) => dispatch({
  type: DELETE_STUDENT,
  payload: id,
});
