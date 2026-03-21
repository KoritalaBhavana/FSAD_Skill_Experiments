import React from "react";

function Dashboard({ setPage }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => setPage("local")}>Local Users</button>
      <button onClick={() => setPage("api")}>Users API</button>
      <button onClick={() => setPage("fake")}>Fake API Posts</button>
    </div>
  );
}

export default Dashboard;