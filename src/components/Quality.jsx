import React from 'react';

const Quality = ({ user }) => {
  return (
    <React.Fragment>
      {user.qualities.map((item) => (
        <span className={`badge bg-${item.color} m-2`} key={item._id}>
          {item.name}
        </span>
      ))}
    </React.Fragment>
  );
};

export default Quality;
