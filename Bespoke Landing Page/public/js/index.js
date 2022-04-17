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
    if (document.documentElement.clientWidth < 768) {
        // Top Navbar appear after first element in mobile
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

    if (document.documentElement.clientWidth >= 768) {

        var vertical_position = 0;
        // Vertical position for all browser versions
        if (scrollY)//usual
            vertical_position = scrollY;
        else if (document.documentElement.clientHeight)//ie
            vertical_position = document.documentElement.scrollTop;
        else if (document.body)//ie quirks
            vertical_position = document.body.scrollTop;

        console.log((window.innerHeight + vertical_position) >= document.body.offsetHeight);
        console.log(window.innerHeight + vertical_position);
        console.log(document.body.offsetHeight);
        // Right Navbar menu slide out of page when reached bottom
        if ((window.innerHeight + vertical_position) >= document.body.offsetHeight) {
            navbar.classList.add("scrolledOut");
        } else {
            navbar.classList.remove("scrolledOut");
        }
    }


    // To top button reappears
    const toTopButton = document.getElementById("toTopButton");
    if (vertical_position > 800) {
        toTopButton.classList.add("to-button-effect");
    } else toTopButton.classList.remove("to-button-effect");

    // Scrollspy effect on navbar
    const sections = document.querySelectorAll("body section");
    const sideMenu = document.getElementById("side-menu");

    sections.forEach((el, key) => {
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
