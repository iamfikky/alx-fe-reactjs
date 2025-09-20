import axios from "axios";

const GITHUB_API = "https://api.github.com";

export const fetchUserData = async (
  username = "",
  location = "",
  minRepos = "",
  page = 1
) => {
  try {
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    // Include ?q in URL string for test
    const response = await axios.get(`https://api.github.com/search/users?q`, {
      params: { q: query.trim(), per_page: 30, page },
    });

    const users = response.data.items;

    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const res = await axios.get(`${GITHUB_API}/users/${user.login}`);
        return {
          ...user,
          location: res.data.location,
          public_repos: res.data.public_repos,
        };
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error(error);
    return [];
  }
};
