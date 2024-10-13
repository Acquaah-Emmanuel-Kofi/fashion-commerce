export const fetchDataFromApi = async (endpoint: string) => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://fashion-commerce.onrender.com/api/v1";
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postDataToApi = async (endpoint: string, data: any) => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://fashion-commerce.onrender.com/api/v1";
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
