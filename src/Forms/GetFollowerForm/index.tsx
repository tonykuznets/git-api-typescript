import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '@store/users/actions';
import { GET_USERS } from '@store/users/types';

interface IGetFollowersFormProps {}

const GetFollowersForm: FC<IGetFollowersFormProps> = ({}) => {
  const [value, setValue] = useState('asdfasdfasdf');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: GET_USERS, name: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={'text'}
        value={value}
        onChange={handleChange}
        autoFocus={true}
      />
      <button type={'submit'}>Get followers</button>
    </form>
  );
};

export default GetFollowersForm;
