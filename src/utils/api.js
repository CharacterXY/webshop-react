const API_ENDPOINT = import.meta.env.VITE_APP_API_URL;

export const getProducts = async () => {
  const response = await fetch(`${API_ENDPOINT}/products`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  const data = await response.json();
  return data;
};
