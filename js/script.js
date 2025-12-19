/// Call welcomeMessage function to execute on page load
welcomeMessage();

function welcomeMessage() {
    /// prompt user to enter their name
    const userInput = prompt("Please enter your name:");
    /// get the welcome-speech DOM element
    const welcomeDOM = document.getElementById('welcome-speech');
    
    /// check if userInput is null or empty
    if (userInput === null || userInput.trim() === '') {
        /// Render default welcome message
        welcomeDOM.innerHTML = 'Welcome, Guest!';
        return;
    }   else {  
        /// Render personalized welcome message
        welcomeDOM.innerHTML = 'Welcome, ' + userInput + '!';
    }
}

/// Form validation function
function validateForm() {
    /// get form input values
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const gender = document.forms["contactForm"]["gender"].value;
    const message = document.forms["contactForm"]["message"].value

    // Basic validation
    if (name.trim() === '' || email.trim() === '' || gender.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

/// Preview form function
function previewForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const gender = document.forms["contactForm"]["gender"].value;
    const message = document.forms["contactForm"]["message"].value;

    if (name.trim() === '' || email.trim() === '' || gender.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields before previewing.');
        return;
    }

    // Display preview
    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-email').textContent = email;
    document.getElementById('preview-gender').textContent = gender;
    document.getElementById('preview-message').textContent = message;
    document.getElementById('preview').style.display = 'block';
}

/// Submit form function
function submitForm() {
    if (validateForm()) {
        const name = document.forms["contactForm"]["name"].value;
        const email = document.forms["contactForm"]["email"].value;
        const gender = document.forms["contactForm"]["gender"].value;
        const message = document.forms["contactForm"]["message"].value;
        
        // Log to console
        console.log('Message sent:', { name, email, gender, message });
        
        alert('Message sent successfully!');
        // Here you can add code to actually send the form, e.g., via AJAX
        document.forms["contactForm"].reset();
        hidePreview();
    }
}

/// Hide preview function
function hidePreview() {
    document.getElementById('preview').style.display = 'none';
}

/// Add event listener to form to prevent default submit
document.forms["contactForm"].addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Please use the Preview button first.');
});