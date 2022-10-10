import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";

export async function getPosts() {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const getPostsURL = `${API_SOCIAL_URL}${action}`;
    const response = await fetch(getPostsURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json();
}


export async function getPost(id) {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
    const response = await fetch(getPostURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json();
}