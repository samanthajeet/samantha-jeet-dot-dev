import axios from "axios";

const api = process.env.REACT_APP_API;

export const getBooks = async () => {
  try {
    const response = await axios.get(`${api}/books`);
    return response.data;
  } catch (err) {
    return { data: "error" };
  }
};

export const getBook = async (id) => {
  try {
    const response = await axios.get(`${api}/books/${id}`);
    return response.data;
  } catch (err) {
    return { data: "error" };
  }
};
