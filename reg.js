
const form = document.getElementById("reg-form");

const passwordError = document.getElementById("password-error");

const conPasswordError = document.getElementById("con-password-error");

const handleSubmit = (e) => {
    e.preventDefault();

    const password = document.getElementById("Password").value;
    const conPassword = document.getElementById("con-Password").value;


    // Validation

    if (!password) {
        passwordError.textContent = "Enter Password";
        return;
    }

    if (password.length < 10) {
        passwordError.textContent = "Password must be at least 10 characters";
        return;
    }

    if (password !== conPassword) {
        conPasswordError.textContent = "Passwords do not match";
        return;
    }

    console.log({ password, conPassword });
};

form.addEventListener("submit", handleSubmit);
