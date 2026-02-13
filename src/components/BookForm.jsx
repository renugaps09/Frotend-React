import React, { useState, useEffect } from "react";
import api from "../api/axiosInstance";

function BookForm({ editingBook, onSuccess }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setPrice(editingBook.price);
      setCategory(editingBook.category);
      setYear(editingBook.year);
    }
  }, [editingBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingBook) {
        await api.put(`/books/${editingBook._id}`, {
          title,
          author,
          price: Number(price),
          category,
          year: Number(year),
        });
        alert("Book Updated ✅");
      } else {
        await api.post("/books", {
          title,
          author,
          price: Number(price),
          category,
          year: Number(year),
        });
        alert("Book Added ✅");
      }

      // Reset form
      setTitle("");
      setAuthor("");
      setPrice("");
      setCategory("");
      setYear("");

      if (onSuccess) onSuccess();

    } catch (error) {
      alert("Error ❌");
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-3 rounded"
        required
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-3 rounded"
        required
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-3 rounded"
        required
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 rounded"
        required
      />
      <input
        placeholder="Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border p-3 rounded"
        required
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600 transition"
      >
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;
