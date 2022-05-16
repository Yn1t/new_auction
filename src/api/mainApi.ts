import { getSession } from "../utils/authService";
import axios from "axios";
import { HOST } from "../../config";

export const getUserById = (id: string) => {
  const session = getSession();

  return axios.get(`${HOST}/api/private/users/${id}`, {
    headers: {
      "x-access-login": session?.login || "",
      "x-access-password": session?.password || "",
    },
  });
};