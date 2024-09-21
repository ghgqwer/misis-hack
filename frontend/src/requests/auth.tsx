import axios from "axios";
import { BASE_URL } from "../constants";

export async function registerUser(values: {username: string, email: string, password: string}) {
    return await axios.post(
        `${BASE_URL}/auth/register`,
        values
    )
}


export async function loginUser(values: {email: string, password: string}) {
    return await axios.post(
        `${BASE_URL}/auth/register`,
        values
    )
}
