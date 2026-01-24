import api from "./axiosInstance";

// ✅ Signup API
export const signupUser = async (data) => {
  try {
    const res = await api.post("/auth/signup", data);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Signup failed"
    );
  }
};

// ✅ Login API
export const loginUser = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed"
    );
  }
};
