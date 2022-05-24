import axios from "axios"
import { HOST } from "../../config"


export const getOtherUser = (id: string) => {
    return axios.get(`${HOST}/api/user/${id}`, {});
}

