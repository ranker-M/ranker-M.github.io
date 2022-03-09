//  Collapse button toggle effect
const collapseBtn = document.querySelector(".cover .navbar .collapse-menu");
const hiddenMenu = document.querySelector(".cover .navbar .hidden-menu");

collapseBtn.addEventListener("click", () => {
    if (hiddenMenu.style.display == "flex") {
        hiddenMenu.style.display = "none";
        collapseBtn.classList.remove("close-style");
    } else {
        hiddenMenu.style.display = "flex";
        collapseBtn.classList.add("close-style");
    }
})


// Open dropdown menus with buttons
const dropdownButtons = document.querySelectorAll(".hidden-menu .dropdown-button");

dropdownButtons.forEach((el, index, array) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("opened")) {
            el.classList.remove("opened");
            el.classList.add("closed");
        }
        else if (el.classList.contains("closed")) {
            array.forEach(del => {
                if (del.classList.contains("opened")) {
                    del.classList.remove("opened");
                }
            });
            el.classList.remove("closed");
            el.classList.add("opened");
        }
        else {
            array.forEach(del => {
                if (del.classList.contains("opened")) {
                    del.classList.remove("opened");
                }
            });
            el.classList.add("opened");
        }
    });
});