import { takeLatest } from 'redux-saga/effects';
import { JokesFetch, JokeUpdate, JokeDelete, JokeCreate } from './Jokes';
import * as types from '../constants/actionTypes';

export default function* watch() {
  yield takeLatest(types.FETCH_JOKES, JokesFetch);
  yield takeLatest(types.CREATE_JOKES, JokeCreate);
  yield takeLatest(types.UPDATE_JOKES, JokeUpdate);
  yield takeLatest(types.DELETE_JOKES, JokeDelete);
}
