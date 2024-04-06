function orangeColor() {    
    let navElement = document.querySelector("nav");
    let headingElement = document.querySelector("h1 + nav");
    let secondHeadingElement = document.querySelector("hr ~ h1");

    navElement.style.backgroundColor = "yellow"; 

    secondHeadingElement.style.backgroundColor = "orange";
}

function yellowColor() {
    let navElement = document.querySelector("nav");
    let headingElement = document.querySelector("h1 + nav");
    let secondHeadingElement = document.querySelector("hr ~ h1");

    navElement.style.backgroundColor = "pink";
    secondHeadingElement.style.backgroundColor = "skyblue";
}

function validateForm() {
    
    let submitButton = document.getElementById("submit-button");
    let message = document.getElementById("form-header");
    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();
        message.style.backgroundColor = "red";
        message.style.color = "black";
        message.innerHTML = "Or leave your own contacts here and I will get back to you. <br>";
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phoneNumber = document.getElementById("phone-number");
        let canada = document.getElementById("canada");
        let userMessage = document.getElementById("message");
        let valid = true;
            
            if (name.value == "" && email.value == "" && phoneNumber.value == "" && userMessage.value == "") {
                message.innerHTML += "Please enter all fields";
                valid = false;
            }
            else if (name.value == "") {
                message.innerHTML += "Please enter email";
                valid = false;
            }
            else if (email.value == "") {
                message.innerHTML += "Please enter password";
                valid = false;
            }
            else if (phoneNumber.value == "") {
                message.innerHTML += "Please enter confirm password";
                valid = false;
            }
            else if (phoneNumber.value.length > 10 || phoneNumber.value.length < 10) {
                message.innerHTML += "Please enter 10 digits for the phone number";
                valid = false;
            }
            else if (userMessage.value == "") {
                message.innerHTML += "Please enter confirm password";
                valid = false;
            }
            
            if (valid) {
                message.style.backgroundColor = "green";
                message.innerHTML += "Submitted Successfully";
            }
        });
    
    }

validateForm();