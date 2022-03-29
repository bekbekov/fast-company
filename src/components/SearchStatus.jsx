import React from 'react';

const SearchStatus = ({ users }) => {
  const renderPhrase = (number) => {
    if (number === 1) return 'guy';
    if (number > 1) return 'guys';
    return 'guys';
  };

  return (
    <div>
      <span className={`badge bg-${users.length >= 1 ? 'primary' : 'danger'}`}>
        {users.length >= 1
          ? `${users.length} ${renderPhrase(users.length)} will hung out with you today ;)`
          : 'No one will go out with you today :/'}
      </span>
    </div>
  );
};

export default SearchStatus;
