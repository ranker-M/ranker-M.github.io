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