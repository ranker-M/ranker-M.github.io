const button = document.querySelector("body > div.container.early-access > div > div > form > button");
const input = document.querySelector("body > div.container.early-access > div > div > form > input");
const errorText = document.getElementById("input-error");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    let res = validateEmail(input.value);
    if (!res) {
        errorText.style.opacity = 1;
    } else {
        errorText.style.opacity = 0;
        event.target.submit();
    }
}