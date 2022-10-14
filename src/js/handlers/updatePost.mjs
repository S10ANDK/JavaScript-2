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
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = form.title.value
            const body = form.body.value
            const media = form.media.value
        
            const post = {
                id,
                title,
                body,
                media
            }

            post.id = id;
    
            updatePost(post);
            alert("Post has been updated");
            setTimeout(function timer() {
                location.reload();
            }, 1000);
        })
    }
}