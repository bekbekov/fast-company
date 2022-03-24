import React from 'react';
import api from '../api';

function Users() {
  const [users, setUsers] = React.useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers(users.filter((el) => el._id !== id));
  };

  const renderPhrase = (number) => {};

  return (
    <div>
      <span className={`badge bg-${users.length >= 1 ? 'primary' : 'danger'}`}>
        {users.length >= 1
          ? `${users.length} guys will hung out with you today ;)`
          : 'No one will go out with you today :/'}
      </span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((item, index) => (
                  <span className={`badge bg-${item.color}`} key={`${item.name}_${index}`}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button onClick={() => handleDelete(user._id)} className="btn btn-danger">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
