import { HOST } from "../../config";
import axios from "axios";
import { getSession } from "../utils/authService";



export const getLots = () => {
    const session = getSession();

    return axios.get(`${HOST}/api/profile/lots`, {
        headers: {
          "x-access-login": session?.login || "",
          "x-access-password": session?.password || "",
        },
      });
}