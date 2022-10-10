import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";

import { createPost } from "./api/posts/create-post.mjs";

const urlPath = location.pathname;

if (urlPath === "/html/register/") {
    setFormRegisterListener();
} else if (urlPath === "/html/login/") {
    setFormLoginListener();
}

createPost ({
    title: "Hello Universe",
    body: "This is a new test"
})

// function formCreatePostListener() {
//     const form = document.querySelector("#createPostForm");

//     form.addEventListener(submit, (event) => {
//         event.preventDefault();

//         const title = form.title.value;
//         const body = form.body.value;

//         const postData = {
//             title,
//             body
//         } 
//         createPost(postData);
//     })
// }

// formCreatePostListener();