import { postsURLDesc} from "../api/constants.mjs";
import { postsURLAsc} from "../api/constants.mjs";
import { getPosts } from "../api/posts/get-posts.mjs";
import * as templates from "../api/templates/post.mjs";

/**
 * Filters posts by created date, descending.
 */

 export async function filterDescending () {
    const filterNewestButton = document.querySelector("#filterNewestButton");
    const filterOldestButton = document.querySelector("#filterOldestButton");
    const getPostsURL = postsURLDesc;
    const posts = await getPosts(getPostsURL);
    const container = document.querySelector("#postContainer");
    container.innerHTML = "";
    templates.renderPostsTemplate(posts, container);
    filterNewestButton.classList.add("btn-warning");
    filterOldestButton.classList.remove("btn-warning");
    filterNewestButton.addEventListener("click", filterDescending);
}

/**
 * Filters posts by created date, ascending.
 */

export async function filterAscending () {
    const filterOldestButton = document.querySelector("#filterOldestButton");
    const filterNewestButton = document.querySelector("#filterNewestButton");
    const getPostsURL = postsURLAsc;
    const posts = await getPosts(getPostsURL);
    const container = document.querySelector("#postContainer");
    container.innerHTML = "";
    templates.renderPostsTemplate(posts, container);
    filterOldestButton.classList.add("btn-warning");
    filterNewestButton.classList.remove("btn-warning");
    filterOldestButton.addEventListener("click", filterAscending);
}

