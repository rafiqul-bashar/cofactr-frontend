import { BASE_URL } from "../lib/constants";
import axios from "axios";
export interface Login_Credentials {
  email: string;
  password: string;
}
export interface Register_Credentials {
  name: string;
  email: string;
  password: string;
  seller?: boolean;
  image?: string;
}
const loginToServer = async (credentials: Login_Credentials) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {
      ...credentials,
    });
    return data;
  } catch (error) {
    return error?.message;
  }
};
const registerToServer = async (credentials: Register_Credentials) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/register`, {
      ...credentials,
    });
    return data;
  } catch (error) {
    return error?.message;
  }
};

export { loginToServer, registerToServer };
