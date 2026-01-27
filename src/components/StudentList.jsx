import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStudents, deleteStudent } from "../api/studentApi";

const BASE_URL = "http://localhost:5000";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await getAllStudents();
      setStudents(res.data.students);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        alert("Student deleted successfully!");
        fetchStudents();
      } catch (err) {
        console.error(err);
        alert("Failed to delete student");
      }
    }
  };

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Student List</h2>
        <Link
          to="/students/add"
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add Student
        </Link>
      </div>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Photo</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu._id} className="text-center">
                <td className="border p-2">
                  {stu.photo ? (
                    <img
                      src={`${BASE_URL}/uploads/students/${stu.photo}`}
                      alt="Student"
                      className="w-12 h-12 object-cover mx-auto "
                    />
                  ) : (
                    <span>No Photo</span>
                  )}
                </td>
                <td className="border p-2">
                  {stu.firstName} {stu.lastName}
                </td>
                <td className="border p-2">{stu.email}</td>
                <td className="border p-2">{stu.mobile}</td>
                <td className="border p-2">{stu.gender}</td>
                <td className="border p-2">{stu.course}</td>
                <td className="border p-2">
                  <Link
                    to={`/students/edit/${stu._id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(stu._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;