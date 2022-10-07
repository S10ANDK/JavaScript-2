import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";

const urlPath = location.pathname;

if (urlPath === "/html/register/") {
    setFormRegisterListener();
} else if (urlPath === "/html/login/") {
    setFormLoginListener();
}