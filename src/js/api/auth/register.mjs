import { API_SOCIAL_URL } from "../constants.mjs";

const path = "/auth/register";
const method = "post";


export async function registerUser(profile) {
    const registerURL = API_SOCIAL_URL + path;
    console.log(registerURL);
}