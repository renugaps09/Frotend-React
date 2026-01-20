import API from "./index";

export const signupUser = async (form) => {
  const res = await API.post("/auth/signup", form);
  return res.data;
};
