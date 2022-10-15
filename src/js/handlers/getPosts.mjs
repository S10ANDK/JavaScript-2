import * as urls from "../api/constants.mjs";
import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../api/templates/index.mjs";

export async function getPostsList() {
    const getPostURL = `${urls.API_SOCIAL_URL}/posts`;
    const posts = await postMethods.getPosts(getPostURL);
    const container = document.querySelector("#postContainer");
    container.innerHTML = "";
    templates.renderPostsTemplate(posts, container);
}

export async function getSpecificPost() {
    const posts = await postMethods.getPost();
    const container = document.querySelector("#postContainer");
    templates.renderPostTemplate(posts, container);
}