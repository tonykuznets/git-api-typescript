import { takeEvery } from 'redux-saga/effects';
import { GET_USERS } from './users/types';
import * as usersSaga from './users/saga';

export default function* rootSaga() {
  yield takeEvery('GET_USERS', usersSaga.getUsers);
}
