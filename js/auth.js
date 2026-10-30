const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@enar.com" && password === "admin123") {

        window.location.href = "pages/dashboard.html";

    } else {

        alert("Invalid email or password.");

    }

});