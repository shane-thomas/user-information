export const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=80"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("\nFailed to fetch users because of error -", error.message);
    return null;
  }
};
