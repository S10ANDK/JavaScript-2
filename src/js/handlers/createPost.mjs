import { createPost } from "../api/posts/index.mjs";

export function setCreatePostListener() {
    const form = document.querySelector("#createPostForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = form.title.value
            const body = form.body.value
        
            const post = {
                title,
                body
            }
    
            createPost(post);
        })
    }
}