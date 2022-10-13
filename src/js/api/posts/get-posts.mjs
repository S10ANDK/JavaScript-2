import { API_SOCIAL_URL, postsURLAsc, postsURLDesc } from "../constants.mjs";

const action = "/posts";

export async function getPosts(getPostsURL) {
    const token = localStorage.getItem("accessToken");

    const response = await fetch(getPostsURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json();
}

export async function getPost() {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const postNameId = params.get("id");

    const getPostURL = `${API_SOCIAL_URL}${action}/${postNameId}`;
    const response = await fetch(getPostURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json();
}