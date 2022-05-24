import axios from "axios";
import { HOST } from "../../config";
import { getSession } from "../utils/authService";


export const makeBet = (lotId: string, amount: number) => {
    const session = getSession();
    console.log(session?.login);

    return axios.post(`${HOST}/api/bets/private`, {
        lotId: lotId,
        amount: amount
    },
        {
            headers: {
                "x-access-login": session?.login || "",
                "x-access-password": session?.password || "",
            },
        });
}

export const getBets = () => {
    const session = getSession();

    return axios.get(`${HOST}/api/profile/bets`,
        {
            headers: {
                "x-access-login": session?.login || "",
                "x-access-password": session?.password || "",
            },
        });
}