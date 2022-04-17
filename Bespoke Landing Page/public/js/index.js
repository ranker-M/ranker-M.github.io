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

function closeOnClick(e) {
    if (!(e.target == toggleButton || e.target.parentElement == toggleButton) && sideMenu.classList.contains("opened") && !(e.target == sideMenu || e.target.parentElement == sideMenu)) {
        sideMenu.classList.replace("opened", "closed");
        toggleButton.classList.replace("opened", "closed");
    }
}

toggleButton.addEventListener("click", toggleButtonHandle);
document.body.addEventListener("click", closeOnClick);


// Scroll effect for elements
window.onscroll = function (e) {
    // Works only when large than 768px (md breakpoint)
    if (document.documentElement.clientWidth >= 768) {
    }

    const homeBtn = document.body.querySelector("#home .btn-primary");
    const navbar = document.body.querySelector("#navbar");
    // Navbar appear after first element
    if (document.documentElement.clientWidth < 768) {
        let position = homeBtn.getBoundingClientRect().y;
        if (position < -80) {
            navbar.classList.replace("absolute", "fixed");
            navbar.classList.add("scrolled-navbar");
        }
        else {
            navbar.classList.replace("fixed", "absolute");
            navbar.classList.remove("scrolled-navbar");
        }
    }

    // To top button reappears
    const toTopButton = document.getElementById("toTopButton");
    if (scrollY > 800) {
        toTopButton.classList.add("to-button-effect");
    } else toTopButton.classList.remove("to-button-effect");

    // Scrollspy effect on navbar
    const sections = document.querySelectorAll("body section");
    const sideMenu = document.getElementById("side-menu");

    sections.forEach((el, key) => {
        // let distance = key != 0 ? el.getBoundingClientRect().y : el.getBoundingClientRect().y - 78;
        let distance = el.getBoundingClientRect().y - 78;
        if (distance <= 0 && distance >= (-el.clientHeight)) {
            sideMenu.children[key].classList.add("active");
        } else sideMenu.children[key].classList.remove("active");
    })
}

// Creative text typing effect
const creativeText = document.getElementById("creative-text");
const words = ["developer.", "creative.", "designer."];
let letterCounter = 0;
let wordCounter = 0;
let add = true;
var counterTime = 150;

var changeText = () => {
    creativeText.innerText = words[wordCounter].slice(0, letterCounter + 1) + "|";

    if (!add) letterCounter--;
    else {
        letterCounter++;
    }

    if (letterCounter - 1 == words[wordCounter].length) {
        add = !add;
    }

    if (letterCounter == -1) {
        add = !add;
        wordCounter++;
        if (wordCounter == words.length) wordCounter = 0;
    }

    if (add) counterTime = 175;
    else if (letterCounter - 1 == words[wordCounter].length) counterTime = 1000;
    else counterTime = 75;
    setTimeout(changeText, counterTime);
}
setTimeout(changeText, counterTime);
