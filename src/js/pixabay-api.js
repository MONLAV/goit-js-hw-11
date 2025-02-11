export const searchImage = search => {
  const searchParams = new URLSearchParams({
    key: '48782357-847d9c34a5660a1ede8479ae8',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Host: 'http://localhost:5173',
      Origin: 'https://pixabay.com/api',
    },
  };

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};