import React, { useState, useEffect } from 'react';
import { getUsers, blockUser } from '../services/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response.data);
    });
  }, []);

  const handleBlock = (userId) => {
    blockUser(userId).then(() => {
      setUsers(users.map(user =>
        user.id === userId ? { ...user, blocked: true } : user
      ));
    });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            {!user.blocked && <button onClick={() => handleBlock(user.id)}>Block</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
