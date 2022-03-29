import React from 'react';
import api from '../api';

import SearchStatus from './SearchStatus';
import User from './User';

function Users() {
  const [users, setUsers] = React.useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers(users.filter((el) => el._id !== id));
  };

  return (
    <div>
      <SearchStatus users={users} />
      {users.length !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранный</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <User user={user} />
                <td>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-danger">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <i class="bi bi-emoji-frown"></i>
      )}
    </div>
  );
}

export default Users;
