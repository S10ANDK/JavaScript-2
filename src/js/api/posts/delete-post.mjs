import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    const response = await fetch(removePostURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method
    })

    return await response.json();
}