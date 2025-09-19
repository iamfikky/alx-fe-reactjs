import axios from "axios"; // <- Make sure this line is at the top

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

    const response = await axios.get(`${GITHUB_API}/search/users`, {
      params: { q: query.trim(), per_page: 30, page },
    });

    const users = response.data.items;

    // Fetch detailed info for each user
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
