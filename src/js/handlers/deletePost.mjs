import { removePost } from "../api/posts/delete-post.mjs";

export async function setRemovePostListener() {
    const form = document.querySelector("#editPostForm");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const post = await removePost(id);
        console.log(post);

        document.querySelector("#deleteButton").addEventListener("click", () => {
            removePost(post);
        })
    }
}