export const fetchDataFromApi = async (endpoint: string) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
