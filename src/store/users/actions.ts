import { Dispatch } from 'redux';
import {
  IUsersItem,
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADER,
  SET_USERS_SUCCESS,
  UsersActionTypes,
} from '@src/store/users/types';

export const getUsers = (name: string) => async (
  dispatch: Dispatch<UsersActionTypes>,
) => {
  dispatch(setLoader(true));

  try {
    await fetch(`https://api.github.com/users/${name}/followers`)
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json)))
      .catch((e) => dispatch(setError(true)));
  } catch (e) {
    dispatch(setError(true));
  }

  dispatch(setLoader(false));
};

export const setUsers = (items: IUsersItem[]): UsersActionTypes => ({
  type: SET_USERS,
  payload: {
    items,
  },
});

export const setLoader = (loader: boolean): UsersActionTypes => ({
  type: SET_USERS_LOADER,
  payload: {
    loader,
  },
});

export const setSuccess = (success: boolean): UsersActionTypes => ({
  type: SET_USERS_SUCCESS,
  payload: {
    success,
  },
});

export const setError = (error: boolean): UsersActionTypes => ({
  type: SET_USERS_ERROR,
  payload: {
    error,
  },
});
