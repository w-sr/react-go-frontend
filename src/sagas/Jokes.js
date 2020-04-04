import { put, call } from 'redux-saga/effects';

import { jokesSearch, jokeCreate, jokeUpdate, jokeDelete } from '../apis';
import * as types from '../constants/actionTypes';

export function* JokesFetch() {
  try {
    yield put({ type: types.FETCH_JOKES_REQUEST, pending: true })
    const jokeList = yield call(jokesSearch)

    yield put({ type: types.FETCH_JOKES_SUCCESS, jokes: jokeList, pending: false });
  } catch (error) {
    yield put({ type: types.FETCH_JOKES_FAILURE, error, pending: false });
  }
}

export function* JokeCreate(joke) {
  try {
    yield put({ type: types.CREATE_JOKES_REQUEST, pending: true })
    const jokeList = yield call(jokeCreate, joke)

    yield put({ type: types.CREATE_JOKES_SUCCESS, jokes: jokeList, pending: false });
  } catch (error) {
    yield put({ type: types.CREATE_JOKES_FAILURE, error, pending: false });
  }
}

export function* JokeUpdate(data) {
  try {
    yield put({ type: types.UPDATE_JOKES_REQUEST, pending: true })
    const jokeList = yield call(jokeUpdate, data.param)

    yield put({ type: types.UPDATE_JOKES_SUCCESS, jokes: jokeList, pending: false });
  } catch (error) {
    yield put({ type: types.UPDATE_JOKES_FAILURE, error, pending: false });
  }
}

export function* JokeDelete(params) {
  try {
    yield put({ type: types.DELETE_JOKES_REQUEST, pending: true })
    const jokeList = yield call(jokeDelete, params.id)

    yield put({ type: types.DELETE_JOKES_SUCCESS, jokes: jokeList, pending: false });
  } catch (error) {
    yield put({ type: types.DELETE_JOKES_FAILURE, error, pending: false });
  }
}
