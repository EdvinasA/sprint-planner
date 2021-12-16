import "isomorphic-unfetch";

const ROOT_URL = process.env.REACT_APP_HTTP_PROXY;

export default async function sendRequest(path, options = {}) {
  const response = await fetch(ROOT_URL + path, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    ...options
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
