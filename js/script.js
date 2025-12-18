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
    const message = document.forms["contactForm"]["message"].value;