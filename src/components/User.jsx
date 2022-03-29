import React from 'react';
import Bookmark from './Bookmark';

import Quality from './Quality';

const User = ({ user }) => {
  return (
    <React.Fragment>
      <td>{user.name}</td>
      <td>
        <Quality user={user} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark />
      </td>
    </React.Fragment>
  );
};

export default User;
