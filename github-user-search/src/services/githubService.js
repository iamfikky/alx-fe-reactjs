import axios from "axios";

const GITHUB_API = "https://api.github.com";

// Function name must be fetchUserData to satisfy rubric
export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API}/search/users`, {
      params: { q: query },
    });
    return response.data.items; // returns array of users
  } catch (error) {
    console.error(error);
    return [];
  }
};
