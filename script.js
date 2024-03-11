document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!validateField(nameInput) || !validateField(emailInput) || !validateField(messageInput)) {
            return;
        }

        // If validation passes, you can send the form data to a server or perform other actions
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        // Replace the following with your desired action, such as sending the form data to a server using AJAX
        console.log('Form data:', formData);

        // Optionally, you can reset the form after submission
        form.reset();
    });

    function validateField(field) {
        const value = field.value.trim();
        const isValid = value !== '';

        if (!isValid) {
            alert(`Please enter a valid ${field.name}`);
        }

        return isValid;
    }
});
