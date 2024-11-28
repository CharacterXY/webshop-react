const API_ENDPOINT =
  import.meta.env.VITE_APP_API_URL || 'http://localhost:3000';

export const getProducts = async () => {
  const response = await fetch(`${API_ENDPOINT}/products`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  const data = await response.json();
  console.log('Fetched products:', data);
  return data;
};

export const getNumberOfProducts = async () => {
  const response = await fetch(`${API_ENDPOINT}/products/count`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  const data = await response.json();
  console.log('Fetched number of products:', data);
  return data;
};

export const getPaginatedProducts = async (page, limit) => {
  const response = await fetch(
    `${API_ENDPOINT}/products/pagination/?page=${page}&limit=${limit}`,
    {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  const data = await response.json();
  console.log('Fetched paginated products:', data);
  return data;
};
