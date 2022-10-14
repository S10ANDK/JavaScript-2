import { removePost } from "../api/posts/delete-post.mjs";

export async function setRemovePostListener() {
    const deleteButton = document.querySelector("#deleteButton");
    deleteButton.addEventListener("click", () => {

        deletePost();

        setTimeout(function timer() {
            window.location.href = "/html/posts";
        }, 1000);
        alert("Post has been deleted")
    })
}

async function deletePost() {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");

        const post = await removePost(id);
        removePost(post);
        return await response.json();
}