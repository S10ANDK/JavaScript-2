export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post", "row", "w-75", "mx-auto", "my-5", "border", "rounded-3", "p-5"); 

    const postHeading = document.createElement("h2");
    postHeading.classList.add("postHeading", "col");
    const postHeadingText = document.createTextNode(postData.title);
    postHeading.appendChild(postHeadingText);
    post.appendChild(postHeading);

    const createdDateP = document.createElement("p");
    createdDateP.classList.add("createdDate", "col-2");
    const createdDate = document.createTextNode(new Date(postData.created).toGMTString());
    createdDateP.appendChild(createdDate);
    post.appendChild(createdDateP);

    if (postData.body) {
        const bodyContainer = document.createElement("div");
        bodyContainer.classList.add("bodyContainer", "my-3");
        const bodyText = document.createTextNode(postData.body);
        bodyContainer.appendChild(bodyText);
        post.appendChild(bodyContainer);
    }

    if (postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        img.classList.add("w-100", "text-center")
        post.append(img);
    }

    const viewPostButton = document.createElement("a");
    viewPostButton.classList.add("btn", "btn-primary", "btn-outline-success", "my-3");
    const id = postData.id;
    viewPostButton.href = "/html/post/?id=" + id;
    const buttonText = document.createTextNode("View Post");
    viewPostButton.appendChild(buttonText);
    post.appendChild(viewPostButton);

    return post;
}

export function postTemplateSingle(postData) {
    const post = document.createElement("div");
    post.classList.add("post", "row", "w-75", "mx-auto", "my-5", "border", "rounded-3", "p-5"); 

    const postHeading = document.createElement("h2");
    postHeading.classList.add("postHeading", "col");
    const postHeadingText = document.createTextNode(postData.title);
    postHeading.appendChild(postHeadingText);
    post.appendChild(postHeading);

    const createdDateP = document.createElement("p");
    createdDateP.classList.add("createdDate", "col");
    const createdDate = document.createTextNode(new Date(postData.created).toGMTString());
    createdDateP.appendChild(createdDate);
    post.appendChild(createdDateP);

    if (postData.body) {
        const bodyContainer = document.createElement("div");
        bodyContainer.classList.add("bodyContainer", "my-3");
        const bodyText = document.createTextNode(postData.body);
        bodyContainer.appendChild(bodyText);
        post.appendChild(bodyContainer);
    }

    if (postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        img.classList.add("w-1000")
        post.append(img);
    }

    const viewPostButton = document.createElement("a");
    viewPostButton.classList.add("btn", "btn-primary", "btn-outline-success", "my-3");
    const id = postData.id;
    viewPostButton.href = "/html/post/edit/?id=" + id;
    const buttonText = document.createTextNode("Edit post");
    viewPostButton.appendChild(buttonText);
    post.appendChild(viewPostButton);

    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplateSingle(postData));
}

export function renderPostsTemplate(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}