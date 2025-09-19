import axios from "axios";

const GITHUB_API = "https://api.github.com";

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API}/search/users`, {
      params: { q: query },
    });
    return response.data.items; // returns an array of users
  } catch (error) {
    console.error(error);
    return [];
  }
};
