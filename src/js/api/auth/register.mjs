import { API_SOCIAL_URL } from "../constants.mjs";

const path = "/auth/register";

export async function registerUser(profile) {
    const registerURL = API_SOCIAL_URL + path;
    console.log(registerURL);
    const body = JSON.stringify(profile);

    const response = await fetch (registerURL, {
        headers: {
            "Content-Type": "application/json",
        },
        body,
    });

    const result = await response.json();
    console.log(result);
}