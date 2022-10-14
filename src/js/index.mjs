import * as listeners from "./handlers/index.mjs";

import * as urls from "./api/constants.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./api/templates/index.mjs";

const urlPath = location.pathname;

if (urlPath === "/html/register/") {
    listeners.setFormRegisterListener();

} else if (urlPath === "/html/login/") {
    listeners.setFormLoginListener();

} else if (urlPath === "/html/post/create/") {
    listeners.setCreatePostListener();

} else if (urlPath === "/html/post/edit/") {
    listeners.setUpdatePostListener();
    listeners.setRemovePostListener();

} else if (urlPath === "/html/posts/") {
    listeners.getPostsList();
    listeners.filterAsc();
    listeners.filterDesc();

} else if (urlPath === "/html/post/") {
    listeners.getSpecificPost();
}

// postMethods.removePost()