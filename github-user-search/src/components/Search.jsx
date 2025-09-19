import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import "./Search.css"; // keep your existing CSS

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchUsers = async (reset = true) => {
    if (reset) {
      setLoading(true);
      setError(null);
    }

    try {
      const results = await fetchUserData(username, location, minRepos, page);
      if (results.length === 0 && reset) {
        setError("Looks like we cant find the user");
      } else {
        setUsers((prev) => (reset ? results : [...prev, ...results]));
        setHasMore(results.length === 30); // GitHub default per_page
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchUsers(true);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
    fetchUsers(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} width="50" />
            <div>
              <h3>{user.login}</h3>
              {user.location && <p>Location: {user.location}</p>}
              {user.public_repos != null && <p>Repos: {user.public_repos}</p>}
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <div className="load-more-container">
          <button onClick={loadMore} className="load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
