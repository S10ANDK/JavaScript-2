import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";

/**
 * Passes meta data in order to fetch posts from the server
 */

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

/**
 * Passes meta data and inserts id to the url in order to get a specific post
 */

export async function getPost() {
    const token = localStorage.getItem("accessToken");

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