document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        
        // Get input values
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        // Show a basic success message
        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

        // Clear form
        document.getElementById("contact-form").reset();
    });
});
