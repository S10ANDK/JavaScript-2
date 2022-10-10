import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";

// import { updatePost } from "./api/posts/update-post.mjs";
// import { createPost } from "./api/posts/create-post.mjs";
import { removePost } from "./api/posts/delete-post.mjs";

const urlPath = location.pathname;

if (urlPath === "/html/register/") {
    setFormRegisterListener();
} else if (urlPath === "/html/login/") {
    setFormLoginListener();
}

// createPost ({
//     title: "Hello Universe",
//     body: "This is a new test"
// })

// updatePost ({
//     id: 4669,
//     title: "Hello Universe UPDATED",
//     body: "This is a new test UPDATED"
// })

removePost(4669);