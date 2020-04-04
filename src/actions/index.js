import * as types from '../constants/actionTypes';

export const jokesGetAction = () => ({
  type: types.FETCH_JOKES
});

export const jokesCreateAction = (joke) => ({
  type: types.CREATE_JOKES,
  joke
});

export const jokesUpdateAction = (param) => ({
  type: types.UPDATE_JOKES,
  param
});

export const jokesDeleteAction = (id) => ({
  type: types.DELETE_JOKES,
  id
});