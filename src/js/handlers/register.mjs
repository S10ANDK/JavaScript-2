/**
 * Collects data from register form, turning the submitted data into an object.
 */
import { registerUser } from "../api/auth/register.mjs";
import { API_SOCIAL_URL } from "/src/js/api/constants.mjs";
// import { registerUser } from "../api/auth/register.mjs";

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
        const path = "/auth/register";

        const method = form.method
        const registerURL = API_SOCIAL_URL + path;
        async function registerUser(url, data) {
            try {
                const postData = {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                };

                const response = await fetch(url, postData);
                console.log(response);
                const json = await response.json();
                console.log(json);
                return json;
            } catch (error) {
                console.error("error occured");
            }
        }
        registerUser(registerURL, profile);
    })
}



