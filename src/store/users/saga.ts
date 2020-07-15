import { put, call } from 'redux-saga/effects';
import { setError, setLoader, setUsers } from '@store/users/actions';
import { GetUsersAction } from '@store/users/types';

export function* getUsers(action: GetUsersAction) {
  yield put(setLoader(true));

  let response = null;

  try {
    response = yield call(() =>
      fetch(`https://api.github.com/users/${action.name}/followers`).then(
        (response) =>
          response.json().then((res) => {
            return {
              data: res,
              status: response.status,
            };
          }),
      ),
    );

    if (response.status === 200) {
      yield put(setUsers(response.data));
    }
  } catch (e) {
    yield put(setError(true));
  }

  yield put(setLoader(false));
}
