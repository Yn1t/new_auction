import { HOST } from "../../config";
import axios, { AxiosResponse } from "axios";
import { User } from "../types/types";
import { clearSession, getSession, saveSession } from "../utils/authService";

export const signup = (
  email: string,
  password: string,
  login: string
): Promise<AxiosResponse<{ id: string }>> => {
  return axios.post(`${HOST}/api/registration/signup?`, {
    name: login,
    email: email,
    password: password,
  });
};

export const signin = (
  email: string,
  password: string
): Promise<AxiosResponse<{ id: string }>> => {
  return axios.post(`${HOST}/api/registration/login`, {
    email: email,
    password: password,
  });
};

export const getAccountInfo = (): Promise<AxiosResponse<User>> => {
  const session = getSession();

  return axios.get(`${HOST}/api/profile`, {
    headers: {
      "x-access-login": session?.login || "",
      "x-access-password": session?.password || "",
    },
  });
};

