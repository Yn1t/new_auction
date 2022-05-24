import axios from "axios";
import { HOST } from "../../config";
import { getSession } from "../utils/authService";

export const setMoney = (balance: number, email: string) => {
    const session = getSession();

    return axios.post(`${HOST}/api/profile/money`, 
      {
        "email": email,
        "balance": balance,
      },
      {
        headers: {
          "x-access-login": session?.login || "",
          "x-access-password": session?.password || "",
        },
      });
}