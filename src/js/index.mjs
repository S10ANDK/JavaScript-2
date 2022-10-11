import * as listeners from "./handlers/index.mjs"
import * as templates from "./api/templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const urlPath = location.pathname;

async function getPostsList() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostsTemplate(posts, container);
}

async function getSpecificPost() {
    const posts = await postMethods.getPost();
    const container = document.querySelector("#post");
    templates.renderPostTemplate(posts, container);
    // console.log(id);
}

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
} else if (urlPath === "/html/posts/") {
    getPostsList();
} else if (urlPath === "/html/post/") {
    getSpecificPost();
}



// testTemplate()




// postMethods.createPost({
//     title: "testing",
//     body: "this is a test"
// })
// postMethods.updatePost()
// postMethods.removePost()
// postMethods.getPost(4687).then(console.log)
// postMethods.getPosts().then(console.log)