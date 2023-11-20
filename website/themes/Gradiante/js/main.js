const searchform = document.querySelector(".searchform")
const searchbar = document.getElementById("searchbar");
// searchbar.style.width = "150px"

const btnSearch = document.getElementById("btn-submit_search");

searchform.addEventListener("submit", e => {
    e.preventDefault();
})

btnSearch.addEventListener("click", () => {
    // searchbar.classList.add("searchbar--active");
    searchbar.style.width = "150px";
    searchbar.style.display = "flex";

})
