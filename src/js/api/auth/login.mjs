import { API_SOCIAL_URL } from "../constants.mjs";

const path = "/auth/login";
const method = "POST";

export async function loginProfile(profile) {
    const loginURL = API_SOCIAL_URL + path;
    console.log(loginURL);
    const body = JSON.stringify(profile);

    const response = await fetch (loginURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    });

    const result = await response.json();
    console.log(result);
}