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

// Slider
export function slider(SlideList, ControlsContainer, IsAutomatic = false) {
    let position = 0;
    let interval = IsAutomatic ? setInterval(changePosition, 3000) : false;
    let dotList = [];

    (function renderDots() {
        SlideList.map(dot => {
            dot = document.createElement("button");
            dot.setAttribute("class", "dot btn");
            ControlsContainer.appendChild(dot);
        });

        return dotList = Array.from(document.getElementsByClassName("dot"));

    }());

    function changePosition() {
        if(position > SlideList.length * 100 - 100) {
            position = 0;
        }
        
        addRemoveClasses(dotList[position / 100], dotList, "dot--active");
        
        SlideList.forEach(slide => slide.style.right = position+"%");
        position += 100


    }

    SlideList.forEach(slide => slide.addEventListener("mouseenter", () => {clearInterval(interval)}))
    // SlideList.forEach(slide => slide.addEventListener("mouseout", () => {setTimeout(interval)}))

    dotList.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            position = index * 100;
            addRemoveClasses(dot, dotList, "dot--active");
            changePosition();
        });
    })

    dotList[0].classList.add("dot--active");

    // changePosition()

    // Mouseenter Para o Slider
    // Mouseout continua o slider

}

function addRemoveClasses(CurrentElement, ElementList, ElementClass) {
    ElementList.map(element => element.classList.remove(ElementClass));
    CurrentElement.classList.add(ElementClass);
}

export function elementToggle(btnToggle, content, isContentList = false, classList) {
    btnToggle.addEventListener("click", () => {
        if(isContentList) {
            content.forEach(element => {
                element.classList.toggle(classList)
            });
        }else {
            content.classList.toggle(classList);
        }
    });
}