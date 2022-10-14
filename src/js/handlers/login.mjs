/**
 * Collects data from login form, sending it to a server, and receiving a token.
 */
import { loginProfile } from "../api/auth/login.mjs";

export function setFormLoginListener() {
    const form = document.querySelector("#formLogin");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = form.email.value
            const password = form.password.value
        
            const profile = {
                email,
                password
            }
    
            loginProfile(profile);
            alert("You have been logged in!");
            setTimeout(function timer() {
                window.location.href = "/html/posts";
            }, 1000);
        })
    }
}