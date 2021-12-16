import sendRequest from "./sendRequest";

export const getMethod = (path) => sendRequest(path, {
  method: 'GET',
});

export const putMethod = (path, body) => sendRequest(path, {
  method: "PUT",
  body: JSON.stringify(body)
});

export const postMethod = (path, body) => sendRequest(path, {
  body: JSON.stringify(body)
});

export const deleteMethod = (path) => sendRequest(path, {
  method: 'DELETE',
});
