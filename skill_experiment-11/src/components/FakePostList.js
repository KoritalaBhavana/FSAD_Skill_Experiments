import React, { useEffect, useState } from "react";

function FakePostList({ setPage }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userId, setUserId] = useState("all");

  const fetchPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    setUserId(value);

    if (value === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(p => p.userId === Number(value)));
    }
  };

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={() => setPage("home")}>Back</button>
      <button onClick={fetchPosts}>Refresh</button>

      {/* Dropdown Filter */}
      <select onChange={handleFilter} value={userId}>
        <option value="all">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {filteredPosts.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;