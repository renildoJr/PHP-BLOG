import { elementToggle, slider } from "./functions.js";

// searchBox();
// menuDropdownOnClick();

// addEventListener("resize", menuDropdownOnClick);

slider(Array.from(document.getElementsByClassName("slider__post")), document.getElementById("controls-container"));

const btnShowMoreList = document.querySelectorAll(".show-more .btn");

btnShowMoreList.forEach((btn, index) => {
   const posts = Array.from(document.querySelectorAll(".left-content section .posts")[index].children);
   elementToggle(btn, posts, true, "post--visible");
});
