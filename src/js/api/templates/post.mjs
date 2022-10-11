export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post"); 

    const postHeading = document.createElement("h2");
    postHeading.classList.add("postHeading");
    const postHeadingText = document.createTextNode(postData.title);
    postHeading.appendChild(postHeadingText);
    post.appendChild(postHeading);

    const createdDateP = document.createElement("p");
    createdDateP.classList.add("createdDate");
    const createdDate = document.createTextNode(postData.created);
    createdDateP.appendChild(createdDate);
    post.appendChild(createdDateP);

    if (postData.body) {
        const bodyContainer = document.createElement("div");
        bodyContainer.classList.add("bodyContainer");
        const bodyText = document.createTextNode(postData.body);
        bodyContainer.appendChild(bodyText);
        post.appendChild(bodyContainer);
    }

    if (postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        img.classList.add("w-50")
        post.append(img);
    }

    const viewPostButton = document.createElement("a");
    viewPostButton.classList.add("btn");
    viewPostButton.classList.add("btn-primary");
    viewPostButton.classList.add("btn-outline-success");
    viewPostButton.classList.add("my-3");
    const id = postData.id;
    viewPostButton.href = "/html/post/?id=" + id;
    const buttonText = document.createTextNode("View Post");
    viewPostButton.appendChild(buttonText);
    post.appendChild(viewPostButton);

    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

export function renderPostsTemplate(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}