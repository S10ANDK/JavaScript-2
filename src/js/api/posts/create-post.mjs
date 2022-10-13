import { API_SOCIAL_URL } from "../constants.mjs";

const method = "post";

export async function createPost(postData) {
    const token = localStorage.getItem("accessToken");

    const createPostURL = API_SOCIAL_URL + "/posts";
    const response = await fetch(createPostURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}