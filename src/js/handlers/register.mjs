/**
 * Collects data from register form, turning the submitted data into an object.
 */
import { registerUser } from "../api/auth/register.mjs";

export function setFormRegisterListener() {
    const form = document.querySelector("#formRegister");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const banner = form.banner.value
        const avatar = form.avatar.value
    
        const profile = {
            name,
            email,
            password,
            banner,
            avatar
        }
        registerUser(profile);
    })
}