import { postTemplate } from "../api/templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs"

const searchField = document.querySelector("#searchField");

export async function search(e) {
    const value = e.target.value.toLowerCase();
    
    const posts = await postMethods.getPosts()

    const searchOutcome = posts.filter((postData) => 
    postData.title.toLowerCase().includes(value) || postData.body.toLowerCase().includes(value));

    const postsContainer = document.querySelector("#postContainer");
    if (searchOutcome.length === 0) {
        postsContainer.innerHTML = "No results";
    } else {
        searchOutcome.forEach((postData) => {
            postsContainer.innerHTML = "";
            postsContainer.innerHTML += postTemplate(postData);
        });
    }
}

if (searchField) {
    searchField.addEventListener("keyup", search);
}