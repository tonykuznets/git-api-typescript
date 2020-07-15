import {
  SET_USERS_ERROR,
  SET_USERS_LOADER,
  SET_USERS_SUCCESS,
} from '@store/users/types';
import { setError, setLoader, setSuccess } from '@store/users/actions';

describe('Users actions', () => {
  test('Users actions: setError', () => {
    expect(setError(true)).toEqual({
      type: SET_USERS_ERROR,
      payload: { error: true },
    });
  });

  test('Users actions: setLoader', () => {
    expect(setLoader(true)).toEqual({
      type: SET_USERS_LOADER,
      payload: { loader: true },
    });
  });

  test('Users actions: setSuccess', () => {
    expect(setSuccess(true)).toEqual({
      type: SET_USERS_SUCCESS,
      payload: { success: true },
    });
  });
});
