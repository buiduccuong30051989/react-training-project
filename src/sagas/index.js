import { all } from 'redux-saga/effects';
import homeSaga from './homeSaga';

// @see https://github.com/redux-saga/redux-saga/issues/160
export default function* rootSaga() {
  yield all([
    ...homeSaga,
  ]);
}
