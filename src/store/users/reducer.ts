import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADER,
  SET_USERS_SUCCESS,
  UsersActionTypes,
  UsersState,
} from '@src/store/users/types';

const initialState: UsersState = {
  items: [],
  loader: false,
  error: false,
  success: false,
};

export const usersReducer = (
  state = initialState,
  action: UsersActionTypes,
): UsersState => {
  switch (action.type) {
    case SET_USERS_SUCCESS:
    case SET_USERS_ERROR:
    case SET_USERS_LOADER:
      return { ...state, ...action.payload };
    case SET_USERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
