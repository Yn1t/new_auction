import { HOST } from "../../config";
import axios from "axios";
import { getSession } from "../utils/authService";



export const getUserLots = () => {
    const session = getSession();

    return axios.get(`${HOST}/api/profile/lots`, {
        headers: {
          "x-access-login": session?.login || "",
          "x-access-password": session?.password || "",
        },
      });
}

export const getLots = () => {
  const session = getSession();

  return axios.get(`${HOST}/api/lots`, {
      headers: {
        "x-access-login": session?.login || "",
        "x-access-password": session?.password || "",
      },
    });
}

export const getImage = (path: string) => {
  console.log(path);
  return axios.get(`${HOST}${path}`);
}

export const getPopular = () => {
  return axios.get(`${HOST}/api/lots/popular`, {});
}

export const getOtherUserLots = (id: string) => {

  return axios.get(`${HOST}/api/user/getLots/${id}`, {});
}

export const getLot = (id : string) => {
  return axios.get(`${HOST}/api/lots/${id}`, {});
}