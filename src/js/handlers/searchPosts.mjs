import { postTemplate } from "../api/templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs"

const searchField = document.querySelector("#searchField");

export async function filterList(){
    const filter = searchField.value.toLowerCase();
    const listItems = document.querySelectorAll(".post");

    listItems.forEach((item) => {
        let value = item.textContent;

        if(value.toLocaleLowerCase().includes(filter.toLowerCase())) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

if (searchField) {
    searchField.addEventListener("keyup", filterList);
}