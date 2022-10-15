/**
 * Changes the navigation to only display relevant links
 */

export function updateNavLinks () {
    const usernameDisplayed = document.querySelector("#username");
    const storedUsername = localStorage.getItem("name");
    const loginLink = document.querySelector("#loginLink");
    const registerLink = document.querySelector("#registerLink");
    const logo = document.querySelector("#logo");

    if (localStorage.getItem("name") === null) {
        usernameDisplayed.style.display = "none";
    } else {
        usernameDisplayed.innerHTML = storedUsername;
        loginLink.style.display = "none";
        registerLink.style.display = "none";
        logo.href = "";
        logo.href = "/html/posts";
    }
}