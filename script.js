let mainCard = document.querySelector(".main");
let email = document.querySelector("#emailInput");
let subscribeButton = document.querySelector(".subscribeButton");
let emailErrorText = document.querySelector(".emailErrorText");
let successState = document.querySelector(".successState");
let emailSentPara = document.querySelector(".emailSentPara");
let dismissButton = document.querySelector(".dismissButton");

subscribeButton.addEventListener("click", () => {

    if (email.value == "") {
        console.error("Email required");
        email.style.backgroundColor = "hsl(6, 100%, 92%)";
        email.classList.add("placeholderColor")
        email.style.border = "2px solid hsl(4, 100%, 67%)";
        emailErrorText.style.opacity = 1;


    }
    else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        console.error("Valid email required");
        email.style.backgroundColor = "hsl(6, 100%, 92%)";
        email.classList.add("placeholderColor")
        email.style.border = "2px solid hsl(4, 100%, 67%)";
        emailErrorText.innerText = "Valid email required";
        emailErrorText.style.opacity = 1;
        email.classList.add("emailValueColorChange");
        emailErrorText.style.marginLeft = "235px";

    }
    else {
        setTimeout(() => {
            mainCard.style.display = "none";
            successState.style.display = "block";
            emailSentPara.innerHTML = `A confirmation email has sent to <b>${email.value}</b>. Please open it and click the button inside to confirm your subscription`;
        },
            450)
        dismissButton.addEventListener("click", () => { successState.style.display = "none" });
    }
})