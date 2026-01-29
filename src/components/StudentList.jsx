import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllStudents, deleteStudent } from "../api/studentApi";

const BASE_URL = "http://localhost:5000";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await getAllStudents();
      setStudents(res.data.students);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Refetch when redirected from form
  useEffect(() => {
    fetchStudents();
  }, [location.pathname]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await deleteStudent(id);
      alert("Student deleted successfully");
      fetchStudents();
    } catch (error) {
      console.error(error);
      alert("Failed to delete student");
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading students...
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Registered Students
        </h2>
        <Link
          to="/students/add"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow"
        >
          + Add Student
        </Link>
      </div>

      {students.length === 0 ? (
        <p className="text-gray-500">No students found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Photo</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Mobile</th>
                <th className="px-4 py-3 text-left">Gender</th>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left">Subjects</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((stu) => (
                <tr
                  key={stu._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    {stu.photo ? (
                      <img
                        src={`${BASE_URL}/uploads/students/${stu.photo}`}
                        alt="Student"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        N/A
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3 font-medium">
                    {stu.firstName} {stu.lastName}
                  </td>
                  <td className="px-4 py-3">{stu.email}</td>
                  <td className="px-4 py-3">{stu.mobile}</td>
                  <td className="px-4 py-3">{stu.gender}</td>
                  <td className="px-4 py-3">{stu.course}</td>

                  <td className="px-4 py-3">
                    {stu.interestedSubjects?.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {stu.interestedSubjects.map((sub) => (
                          <span
                            key={sub}
                            className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">—</span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <Link
                      to={`/students/edit/${stu._id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(stu._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
