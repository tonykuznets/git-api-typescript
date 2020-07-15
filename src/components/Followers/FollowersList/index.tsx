import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IUsersItem } from '@store/users/types';
import { RootState } from '@store/index.ts';

interface IFollowersListProps {}

const FollowersList: FC<IFollowersListProps> = ({}) => {
  const followers = useSelector<RootState, IUsersItem[]>(
    (store) => store.users.items,
  );
  const loader = useSelector<RootState, boolean>((store) => store.users.loader);

  return (
    <div>
      {loader && <div>Loading...</div>}
      {!loader &&
        followers.map((follower: IUsersItem) => (
          <div key={follower.id}>{follower.login}</div>
        ))}
    </div>
  );
};

export default FollowersList;
