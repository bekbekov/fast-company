import React from 'react';

import api from '../api';
import { paginate } from '../utils/paginate';
import Pagination from './Pagination';

import SearchStatus from './SearchStatus';
import User from './User';

function Users() {
  const [users, setUsers] = React.useState(api.users.fetchAll());
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleDelete = (id) => {
    setUsers(users.filter((el) => el._id !== id));
  };

  const count = users.length;
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <div>
      <SearchStatus users={users} />
      {count !== 0 ? (
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
            {userCrop.map((user) => (
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
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Users;
