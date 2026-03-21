import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import LocalUserList from "./components/LocalUserList";
import UserList from "./components/UserList";
import FakePostList from "./components/FakePostList";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Dashboard setPage={setPage} />}
      {page === "local" && <LocalUserList setPage={setPage} />}
      {page === "api" && <UserList setPage={setPage} />}
      {page === "fake" && <FakePostList setPage={setPage} />}
    </div>
  );
}

export default App;