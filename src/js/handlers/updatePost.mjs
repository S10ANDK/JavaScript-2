import { getPost, updatePost } from "../api/posts/index.mjs";

export async function setUpdatePostListener() {
    const form = document.querySelector("#editPostForm");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");


    if (form) {
        const button = form.querySelector("#submitButton");
        button.disabled = true;
        
        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = form.title.value
            const body = form.body.value
        
            const post = {
                id,
                title,
                body
            }

            post.id = id;
    
            updatePost(post);
        })
    }
}