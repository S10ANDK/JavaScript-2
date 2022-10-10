import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    const response = await fetch(updatePostURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}