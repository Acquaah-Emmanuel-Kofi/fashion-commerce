export const fetchDataFromApi = async (endpoint: string) => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://fashion-commerce.onrender.com/api/v1";
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, { next: { revalidate: 10 } });

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to post this request");
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};

export const patchDataToApi = async (
  endpoint: string,
  data?: object,
  headers = {}
) => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://fashion-commerce.onrender.com/api/v1";
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(data ? { body: JSON.stringify(data) } : {}),
    });

    if (!response.ok) {
      throw new Error("Failed to update data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating data:", error);
    return null;
  }
};

