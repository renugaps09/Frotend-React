import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createStudent,
  getStudentById,
  updateStudent,
} from "../api/studentApi";

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // if editing, we get the student ID

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    course: "",
    dob: "",
    year: "",
    address: "",
  });
  const [photo, setPhoto] = useState(null); // file
  const [preview, setPreview] = useState(null); // photo preview
  const [errors, setErrors] = useState({});

  // Fetch existing student if editing
  useEffect(() => {
    if (id) {
      getStudentById(id).then((res) => {
        const data = res.data.student;
        setStudent({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          mobile: data.mobile || "",
          gender: data.gender || "",
          course: data.course || "",
          dob: data.dob ? data.dob.split("T")[0] : "",
          year: data.year || "",
          address: data.address || "",
        });
        if (data.photo) setPreview(`/uploads/students/${data.photo}`);
      });
    }
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
    <img
  src={student.photo ? `http://localhost:5000/uploads/students/${student.photo}` : '/default.jpg'}
  alt={student.name}
  width="50"
  height="50"
/>
  };
  


  // Validate fields
  const validate = () => {
    const errs = {};
    if (!student.firstName.trim()) errs.firstName = "First name required";
    if (!student.lastName.trim()) errs.lastName = "Last name required";
    if (!student.email.trim()) errs.email = "Email required";
    if (!student.mobile.trim()) errs.mobile = "Mobile required";
    if (!student.gender.trim()) errs.gender = "Gender required";
    if (!student.course.trim()) errs.course = "Course required";

    // Optional: email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (student.email && !emailPattern.test(student.email))
      errs.email = "Invalid email";

    // Optional: mobile format
    const mobilePattern = /^[0-9]{10}$/;
    if (student.mobile && !mobilePattern.test(student.mobile))
      errs.mobile = "Mobile must be 10 digits";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    Object.keys(student).forEach((key) => formData.append(key, student[key]));
    if (photo) formData.append("photo", photo);

    try {
      if (id) {
        await updateStudent(id, formData);
        alert("Student updated successfully!");
      } else {
        await createStudent(formData);
        alert("Student created successfully!");
      }
      navigate("/students");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{id ? "Edit" : "Add"} Student</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* First Name */}
        <div className="mb-2">
          <label className="block">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            className="border p-1 w-full"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-2">
          <label className="block">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            className="border p-1 w-full"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block">Email*</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="border p-1 w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-2">
          <label className="block">Mobile*</label>
          <input
            type="text"
            name="mobile"
            value={student.mobile}
            onChange={handleChange}
            className="border p-1 w-full"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-2">
          <label className="block">Gender*</label>
          <select
            name="gender"
            value={student.gender}
            onChange={handleChange}
            className="border p-1 w-full"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>

        {/* Course */}
        <div className="mb-2">
          <label className="block">Course*</label>
          <select
            name="course"
            value={student.course}
            onChange={handleChange}
            className="border p-1 w-full"
          >
            <option value="">Select</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="BCA">BCA</option>
          </select>
          {errors.course && (
            <p className="text-red-500 text-sm">{errors.course}</p>
          )}
        </div>

        {/* Photo */}
        <div className="mb-2">
          <label className="block">Photo (Optional)</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-24 h-24 object-cover border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
        >
          {id ? "Update" : "Add"} Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
