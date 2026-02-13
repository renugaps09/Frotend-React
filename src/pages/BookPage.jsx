import React, { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

const BookPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const handleEdit = (book) => {
    setEditingBook(book);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSuccess = () => {
    setEditingBook(null);
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-slate-800 tracking-tight">
            📚 Book Management
          </h1>
          <p className="text-slate-500 mt-2">
            Manage your book inventory easily
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mb-10 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">
            {editingBook ? "Edit Book" : "Add New Book"}
          </h2>

          <BookForm
            editingBook={editingBook}
            onSuccess={handleSuccess}
          />
        </div>

        {/* List Section */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">
            All Books
          </h2>

          <BookList
            key={refresh}
            onEdit={handleEdit}
          />
        </div>

      </div>
    </div>
  );
};

export default BookPage;
