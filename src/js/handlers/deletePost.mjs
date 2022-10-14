import { removePost } from "../api/posts/delete-post.mjs";

export async function setRemovePostListener() {
    const deleteButton = document.querySelector("#deleteButton");
    deleteButton.addEventListener("click", () => {

        RemovePost();

        setTimeout(function timer() {
            location.reload();
        }, 1000);
    })
}

export async function RemovePost() {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");

        const post = await removePost(id);
        removePost(post);
        return await response.json();
}