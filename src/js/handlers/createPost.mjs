import { createPost } from "../api/posts/index.mjs";

/**
 * Collects data from create post form, turning the submitted data into an object.
 */

export function setCreatePostListener() {
    const form = document.querySelector("#createPostForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = form.title.value;
            const body = form.body.value;
            const media = form.media.value;
        
            const post = {
                title,
                body,
                media
            }
    
            createPost(post);
            alert("You have created a post!")
            setTimeout(function timer() {
                window.location.href = "/html/posts";
            }, 1000);
        })

    }
}