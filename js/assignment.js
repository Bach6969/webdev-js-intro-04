"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");

// Create an immutable variable for the response element
const responseEl = document.getElementById("response");

// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    // Write your code below
    // Define the message variable
    let message;

    // Conditional logic to determine the message
    if (age >= 21) {
        message = "You can vote and purchase alcohol.";
    } else if (age >= 18) {
        message = "You can vote, but you cannot purchase alcohol.";
    } else {
        message = "You cannot vote and you cannot purchase alcohol.";
    }

    // Update the response element with the message
    responseEl.innerText = message;
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "0", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
