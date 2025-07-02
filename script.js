document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    let isValid = true;

    document.querySelectorAll(".error").forEach((el) => el.textContent = "");


    if (name.value.trim() === "") {
        setError(name, "Name is required");
        isValid = false;
    }


    if (email.value.trim() === "") {
        setError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        setError(email, "Invalid email format");
        isValid = false;
    }

    if (message.value.trim() === "") {
        setError(message, "Message is required");
        isValid = false;
    }


    if (isValid) {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.className = "success";
        name.value = "";
        email.value = "";
        message.value = "";
    } else {
        formMessage.textContent = "Please fix the errors above.";
        formMessage.className = "error";
    }
});

function setError(element, message) {
    element.nextElementSibling.textContent = message;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
