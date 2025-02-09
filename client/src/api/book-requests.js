import * as request from "./requester";

const BASE_URL = 'http://localhost:3000/catalog';
const BASE_URL_SPRING = 'http://localhost:8080/books';

export const getAll = async () => {
  return await request.get(BASE_URL);
};

export const getById = async (bookId) => {
  return await request.get(`${BASE_URL}/${bookId}`);
};

export const createBook = async (data) => {

  console.log(data);
  
  return await request.post(`${BASE_URL}/create`, data);
};

export const getBooksBySearch = async (searchQuery) => {
  return await request.post(`${BASE_URL}/search?query=${searchQuery.params}`);
};

export const deleteGame = async (bookId) => {
  return await request.del(`${BASE_URL}/${bookId}`);
};
