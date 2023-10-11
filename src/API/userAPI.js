import { client } from "./index";

export const login = async (username, password) => {
  const res = await client.post("/login", {
    username: username,
    password: password,
  });
  return res;
};