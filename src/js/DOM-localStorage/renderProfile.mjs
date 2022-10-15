/**
 * Gets profile data from localStorage, and renders the data on to the page
 */

export function renderProfileDetails () {
    const profileContainer = document.querySelector("#profileContainer");

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    const profileName = document.createElement("p");
    profileName.classList.add("text-center", "mx-auto");
    const profileNameText = document.createTextNode(name);
    profileName.appendChild(profileNameText);
    profileContainer.appendChild(profileName);

    const profileEmail = document.createElement("p");
    profileEmail.classList.add("text-center", "mx-auto");
    const profileEmailText = document.createTextNode(email);
    profileEmail.appendChild(profileEmailText);
    profileContainer.appendChild(profileEmail);
}