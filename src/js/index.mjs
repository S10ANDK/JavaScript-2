import * as listeners from "./handlers/index.mjs"
import * as templates from "./api/templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const urlPath = location.pathname;

if (urlPath === "/html/register/") {
    listeners.setFormRegisterListener();
} else if (urlPath === "/html/login/") {
    listeners.setFormLoginListener();
} else if (urlPath === "/html/post/create/") {
    listeners.setCreatePostListener();
} else if (urlPath === "/html/post/edit/") {
    listeners.setUpdatePostListener();
    listeners.setRemovePostListener().then((reponse) => {
        console.log(Response);
    });
} 

// async function testTemplate() {
//     const posts = await postMethods.getPosts();
//     const container = document.querySelector("#post");
//     templates.renderPostsTemplate(posts, container);
// }

// testTemplate()

// postMethods.createPost({
//     title: "testing",
//     body: "this is a test"
// })
// postMethods.updatePost()
// postMethods.removePost()
// postMethods.getPost(4687).then(console.log)
// postMethods.getPosts().then(console.log)