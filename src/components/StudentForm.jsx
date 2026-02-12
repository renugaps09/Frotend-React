import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createStudent,
  getStudentById,
  updateStudent,
} from "../api/studentApi";

const subjectsList = ["Math", "Physics", "Chemistry", "Biology", "English", "Computer Science"];

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
    interestedSubjects: [],
  });
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

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
          interestedSubjects: data.interestedSubjects || [],
        });
        if (data.photo) setPreview(`/uploads/students/${data.photo}`);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubjectsChange = (e) => {
    const value = e.target.value;
    if (student.interestedSubjects.includes(value)) {
      setStudent({
        ...student,
        interestedSubjects: student.interestedSubjects.filter((s) => s !== value),
      });
    } else {
      setStudent({
        ...student,
        interestedSubjects: [...student.interestedSubjects, value],
      });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    const errs = {};
    if (!student.firstName.trim()) errs.firstName = "First name required";
    if (!student.lastName.trim()) errs.lastName = "Last name required";
    if (!student.email.trim()) errs.email = "Email required";
    if (!student.mobile.trim()) errs.mobile = "Mobile required";
    if (!student.gender.trim()) errs.gender = "Gender required";
    if (!student.course.trim()) errs.course = "Course required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (student.email && !emailPattern.test(student.email))
      errs.email = "Invalid email";

    const mobilePattern = /^[0-9]{10}$/;
    if (student.mobile && !mobilePattern.test(student.mobile))
      errs.mobile = "Mobile must be 10 digits";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    Object.keys(student).forEach((key) => {
      if (key === "interestedSubjects") {
        formData.append(key, JSON.stringify(student[key]));
      } else {
        formData.append(key, student[key]);
      }
    });
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          {id ? "Edit Student" : "Student Registration"}
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Fill in the details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Names */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={student.firstName}
              onChange={handleChange}
              className="input-box"
            />
                {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                {errors.firstName}
                </p>
               )}

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={student.lastName}
              onChange={handleChange}
              className="input-box"
            />
          </div>

          {/* Email / Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={student.email}
              onChange={handleChange}
              className="input-box"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={student.mobile}
              onChange={handleChange}
              className="input-box"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* Gender radio buttons */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Gender</p>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <label
                  key={g} 
                  className={`radio-card ${
                    student.gender === g ? "radio-active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={student.gender === g}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {g}
                </label>
              ))}
            </div>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          {/* Course */}
          <div>
            <select
              name="course"
              value={student.course}
              onChange={handleChange}
              className="input-box"
            >
              <option value="">Select Course</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>IT</option>
              <option>BCA</option>
              <option>BCOM</option>
              <option>BA</option>
              <option>EEE</option>
              <option>MECH</option>
              <option>CIVIL</option>
              <option>AI</option>
            </select>
          </div>

          {/* Subjects */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Interested Subjects</p>
            <div className="flex flex-wrap gap-2">
              {subjectsList.map((sub) => (
                <label
                  key={sub}
                  className={`subject-chip ${
                    student.interestedSubjects.includes(sub)
                      ? "subject-active"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    value={sub}
                    checked={student.interestedSubjects.includes(sub)}
                    onChange={handleSubjectsChange}
                    className="hidden"
                  />
                  {sub}
                </label>
              ))}
            </div>
          </div>

          {/* Photo upload */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Profile Photo</p>
            <div className="flex items-center gap-6">
              <div className="w-28 h-28 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No Image</span>
                )}
              </div>
              <label className="cursor-pointer">
                <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Upload Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow hover:scale-105 transition"
            >
              {id ? "Update Student" : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
