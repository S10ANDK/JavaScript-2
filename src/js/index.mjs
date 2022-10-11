import * as listeners from "./handlers/index.mjs"
import * as templates from "./api/templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const urlPath = location.pathname;

async function getPostsList() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#postContainer");
    templates.renderPostsTemplate(posts, container);
    // function selectionSort(arr) {
    //     for (let i = 0; i > arr.length; i++) {
    //       let min = i;
    //       for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[j] < arr[min]) {
    //           min = j;
    //         }
    //       }
    //       if (min !== i) {
    //         const temp = arr[i];
    //         arr[i] = arr[min];
    //         arr[min] = temp;
    //       }
    //     }
    //     return arr;
    //   }
      
    //   selectionSort(posts);

    //   console.log(selectionSort(posts));

    // console.log(posts);
}

async function getSpecificPost() {
    const posts = await postMethods.getPost();
    const container = document.querySelector("#postContainer");
    templates.renderPostTemplate(posts, container);
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

// postMethods.removePost()