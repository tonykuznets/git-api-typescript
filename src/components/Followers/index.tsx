import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '@store/users/actions';
import { IUsersItem } from '@store/users/types';
import { RootState } from '@store/index.ts';

interface IFollowersProps {}

const Followers: FC<IFollowersProps> = ({}) => {
  const dispatch = useDispatch();
  const followers = useSelector<RootState, IUsersItem[]>(
    (store) => store.users.items,
  );
  const loader = useSelector<RootState, boolean>(
    (store) => store.users.loader,
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loader) return <div>Loading...</div>;

  return (
    <div>
      {followers.map((follower: IUsersItem) => (
        <div key={follower.id}>{follower.login}</div>
      ))}
    </div>
  );
};

export default Followers;
