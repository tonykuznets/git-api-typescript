import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from './users/reducer';
import rootSaga from './sagas'

export const rootReducer = combineReducers({ users: usersReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
