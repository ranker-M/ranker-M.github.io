// Side menu toggle button
const toggleButton = document.querySelector("#toggle-button");
const sideMenu = document.querySelector("#side-menu");

function toggleButtonHandle() {
    if (toggleButton.classList.contains("closed")) {
        toggleButton.classList.replace("closed", "opened");
        sideMenu.classList.replace("closed", "opened");
    } else {
        toggleButton.classList.replace("opened", "closed");
        sideMenu.classList.replace("opened", "closed");
    }
}

toggleButton.addEventListener("click", toggleButtonHandle);

// Scroll effect for elements
window.onscroll = function (e) {
    const social = document.querySelectorAll(".green-social-media");
    const movingImg = document.querySelectorAll(".moving-images");

    // Works only when large than 1024px lg breakpoint
    if (document.documentElement.clientWidth >= 1024) {
        social.forEach((el, key) => {
            if (key == 1) {
                slideScroll(el, true, -200, 1, -1);
            } else slideScroll(el, true, -200);
        });
        movingImg.forEach((el, key) => {
            if (el.classList.contains("about-img")) {
                slideScroll(el, false, -150, 1.5);
            }
            else if (el.classList.contains("testimonial-box")) {
                slideScroll(el, false, 0, 2);
            } else slideScroll(el, false);
        });
    } else {
        social.forEach((el) => {
            resetTransform(el);
        });

        movingImg.forEach((el) => {
            resetTransform(el);
        });
    }

    // Scrollspy effect on navbar
    const sections = document.querySelectorAll("body section");
    const navbar = document.getElementById("side-menu");

    sections.forEach((el, key) => {
        // let distance = key != 0 ? el.getBoundingClientRect().y : el.getBoundingClientRect().y - 78;
        let distance = el.getBoundingClientRect().y - 78;
        if (distance <= 0 && distance >= (-el.clientHeight)) {
            navbar.children[key].classList.add("active");
        } else navbar.children[key].classList.remove("active");
    })
}


function slideScroll(el, horizontal = false, offset = 0, speed = 1, direction = 1) {
    var vertical_position = 0;
    if (scrollY)//usual
        vertical_position = scrollY;
    else if (document.documentElement.clientHeight)//ie
        vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
        vertical_position = document.body.scrollTop;

    let currentPosition = window.pageYOffset + el.getBoundingClientRect().top;
    let relativity = (vertical_position - currentPosition) / (8 / speed) * direction;
    if (horizontal) {
        el.style.transform = "translateX(" + (relativity + offset) + "px)";
    } else {
        el.style.transform = "translateY(" + (relativity + offset) + "px)";
    }
}

function resetTransform(el) {
    el.style.transform = "translate3d(0px,0px,0px)";
}


