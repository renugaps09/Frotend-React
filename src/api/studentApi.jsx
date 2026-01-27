import api from "./axiosInstance";

// ➕ Create Student
export const createStudent = (formData) =>
  api.post("/students", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// 📄 Get All Students
export const getAllStudents = () => api.get("/students");

// 📄 Get Single Student
export const getStudentById = (id) => api.get(`/students/${id}`);

// ✏ Update Student
export const updateStudent = (id, formData) =>
  api.put(`/students/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// ❌ Delete Student
export const deleteStudent = (id) => api.delete(`/students/${id}`);
