import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";

import * as post from "./api/posts/index.mjs"

const urlPath = location.pathname;

if (urlPath === "/html/register/") {
    setFormRegisterListener();
} else if (urlPath === "/html/login/") {
    setFormLoginListener();
}

// post.createPost()
// post.updatePost()
// post.removePost()
post.getPost(4667).then(console.log)
// post.getPosts().then(console.log)