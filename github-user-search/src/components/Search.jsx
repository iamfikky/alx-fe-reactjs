import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserCard from "./UserCard";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      // fetchUserData should return an array of users
      const results = await fetchUserData(query);
      if (results.length === 0) {
        setError("No users found");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we can't find users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="users-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
