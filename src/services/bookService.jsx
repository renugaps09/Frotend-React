import api from "../api/axiosInstance.jsx";


// GET all books
export const getBooks = async () => {
  try {
    const res = await api.get("/books");
    return res.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

// ADD book
export const addBook = async (bookData) => {
  try {
    const res = await api.post("/books", bookData);
    return res.data;
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

// UPDATE book
export const updateBook = async (id, bookData) => {
  try {
    const res = await api.put(`/books/${id}`, bookData);
    return res.data;
  } catch (error) {
    console.error("Error updating book:", error);
  }
};

// DELETE book
export const deleteBook = async (id) => {
  try {
    const res = await api.delete(`/books/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};
