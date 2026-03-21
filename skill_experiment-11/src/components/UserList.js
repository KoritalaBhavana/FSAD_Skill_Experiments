import React, { useEffect, useState } from "react";

function UserList({ setPage }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users API</h2>

      <button onClick={() => setPage("home")}>Back</button>

      {users.map(u => (
        <p key={u.id}>
          {u.name} - {u.email} - {u.phone}
        </p>
      ))}
    </div>
  );
}

export default UserList;