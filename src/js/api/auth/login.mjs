import { API_SOCIAL_URL } from "../constants.mjs";

const path = "/auth/login";
const method = "POST";

/**
 * Authenticates user, and stores access token and details from server to localStorage. 
 */

export async function loginProfile(profile) {
    const loginURL = API_SOCIAL_URL + path;
    const body = JSON.stringify(profile);

    const response = await fetch (loginURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    });

    const result = await response.json();

    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("name", result.name);
    localStorage.setItem("email", result.email);
}