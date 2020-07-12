import { Dispatch } from 'redux';
import {
  IUsersItem,
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADER,
  SET_USERS_SUCCESS,
  UsersActionTypes,
} from '@src/store/users/types';

export const getUsers = () => async (dispatch: Dispatch<UsersActionTypes>) => {
  dispatch(setLoader(true));

  try {
    const responce = fetch(`https://api.github.com/users/piotrwitek/followers`)
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json)))
      .catch((e) => dispatch(setError(true)));
  } catch (e) {}

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
