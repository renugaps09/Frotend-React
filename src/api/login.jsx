import API from "./index";

export const loginUser = async (form) => {
  const res = await API.post("/auth/login", form);
  return res.data;
};
