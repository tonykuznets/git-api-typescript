import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { getUsers } from './saga';

test('GET_USERS_SAGA', (assert) => {
  const gen = cloneableGenerator(getUsers)({
    type: 'GET_USERS',
    name: 'asdfasdfasdf',
  });

  gen.next();
  gen.next();
  gen.next();
  gen.next();
  gen.next();

  console.log(gen);
});
