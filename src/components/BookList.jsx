import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all books from backend
  const fetchBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Delete a book
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await api.delete(`/books/${id}`);
      alert("Book deleted ✅");
      fetchBooks(); // Refresh the list
    } catch (err) {
      console.log(err);
      alert("Failed to delete ❌");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading books...</div>;
  }

  if (!books.length) {
    return (
      <div className="text-center py-10 text-gray-400 text-lg">
        No books available 📚
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {books.map((book) => (
        <div
          key={book._id}
          className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex justify-between items-center">

            {/* Book Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {book.title}
              </h3>

              <p className="text-gray-500 mt-1">
                Author: {book.author}
              </p>

              <p className="text-indigo-600 font-semibold mt-2 text-lg">
                ₹ {book.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              {/* Edit functionality can be added later */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
