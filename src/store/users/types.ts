export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const SET_USERS_LOADER = 'SET_USERS_LOADER';
export const SET_USERS_ERROR = 'SET_USERS_ERROR';
export const SET_USERS_SUCCESS = 'SET_USERS_SUCCESS';

export interface IUsersItem {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface UsersState {
  items: IUsersItem[];
  loader: boolean;
  error: boolean;
  success: boolean;
}

export interface GetUsersAction {
  type: typeof GET_USERS;
}

export interface SetUsersAction {
  type: typeof SET_USERS;
  payload: {
    items: IUsersItem[];
  };
}

export interface SetUsersLoaderAction {
  type: typeof SET_USERS_LOADER;
  payload: {
    loader: boolean;
  };
}

export interface SetUsersErrorAction {
  type: typeof SET_USERS_ERROR;
  payload: {
    error: boolean;
  };
}

export interface SetUsersSuccessAction {
  type: typeof SET_USERS_SUCCESS;
  payload: {
    success: boolean;
  };
}

export type UsersActionTypes =
  | GetUsersAction
  | SetUsersAction
  | SetUsersLoaderAction
  | SetUsersErrorAction
  | SetUsersSuccessAction;
