import React, { FC, useEffect, useState } from 'react';

import GetFollowerForm from '@src/Forms/GetFollowerForm';
import FollowersList from './FollowersList';

interface IFollowersProps {}

const Followers: FC<IFollowersProps> = ({}) => {
  return (
    <div>
      <GetFollowerForm />
      <FollowersList />
    </div>
  );
};

export default Followers;
