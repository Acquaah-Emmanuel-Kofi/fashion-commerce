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
export const postDataToApi = async (endpoint: string, data: FormData) => {
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


export const putDataToApi = async (url: string, data: FormData) => {
  const token = localStorage.getItem("token"); // Assuming you store your JWT token in localStorage
  const response = await fetch(`${process.env.API_URL}${url}`, {
    method: "PUT",
    // headers: {
    //   "Authorization": `Bearer ${token}`,
    // },
    body: data,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || "Failed to update the product");
  }

  return await response.json(); // Assuming the response returns the updated product
};
