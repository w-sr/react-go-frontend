import { fork } from 'redux-saga/effects';
import watch from './watchers';

export default function* startForman() {
  yield fork(watch);
}
