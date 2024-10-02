export const fetchDataFromApi = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
