import { postsURLDesc} from "../api/constants.mjs";
import { postsURLAsc} from "../api/constants.mjs";
import { getPosts } from "../api/posts/get-posts.mjs";
import * as templates from "../api/templates/post.mjs";

export async function filterAsc () {
    const filterOldestButton = document.querySelector("#filterOldestButton");
    const getPostsURL = postsURLAsc;
    const posts = await getPosts(getPostsURL);
    const container = document.querySelector("#postContainer");
    container.innerHTML = "";
    templates.renderPostsTemplate(posts, container);
    filterOldestButton.addEventListener("click", filterAsc);
}

export async function filterDesc () {
    const filterNewestButton = document.querySelector("#filterNewestButton");
    const getPostsURL = postsURLDesc;
    const posts = await getPosts(getPostsURL);
    const container = document.querySelector("#postContainer");
    container.innerHTML = "";
    templates.renderPostsTemplate(posts, container);
    filterNewestButton.addEventListener("click", filterDesc);
}