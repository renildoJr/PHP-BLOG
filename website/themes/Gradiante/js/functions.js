// Searchbox
// export function searchBox() {
//     const headerSearchForm = document.querySelector(".page-header .searchform");
//     const headerSearchbox = headerSearchForm.querySelector(".searchbox");
//     const headerSearchbar = headerSearchbox.querySelector("#searchbar");
//     const btnSearchClose = headerSearchbox.querySelector("#btn-close_searchbar");
//     const btnSearchOpen = headerSearchForm.querySelector("#btn-open_search");
//     const btnSearchSubmit = headerSearchForm.querySelector("#btn-submit_search");
    
//     function searchboxOpen() {
//         headerSearchbox.classList.add("searchbox--active");
//         btnSearchClose.addEventListener("click", searchboxClose);
//         btnSearchOpen.style.display = "none";
//         btnSearchSubmit.style.display = "block"
    
//         btnSearchSubmit.addEventListener("click", () => {headerSearchForm.submit()});
//         headerSearchbar.addEventListener("keypress", () => {
//             if (event.key === "Enter") {
//                 headerSearchForm.submit();
//             }
//         });
//     }
    
//     function searchboxClose() {
//         headerSearchbox.classList.remove("searchbox--active");
//         btnSearchOpen.style.display = "block";
//         btnSearchSubmit.style.display = "none";
//     }
    
//     headerSearchForm.addEventListener("submit", e => {e.preventDefault()});
//     btnSearchOpen.addEventListener("click", searchboxOpen);
//     btnSearchClose.addEventListener("click", searchboxClose);
// }

// export function menuDropdownOnClick() {
//     const navbarMenuDropdownLinks = document.querySelectorAll(".dropdown__item > a");

//     navbarMenuDropdownLinks.forEach(menu_link => {
        
//         if(document.body.clientWidth <= 900) {
//             menu_link.addEventListener("click", e => {
//                 e.preventDefault();
//                 menu_link.parentElement.classList.toggle("menu__item--active");
//                 menu_link.nextElementSibling.classList.toggle("submenu--active");
//             });        
//         }
//         // else {
//         //     menu_link.parentElement.classList.remove("menu__item--active");
//         //         menu_link.nextElementSibling.classList.remove("submenu--active");
//         // }
        

//     });
// }