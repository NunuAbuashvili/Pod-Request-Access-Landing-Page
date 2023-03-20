"use strict";

// Getting elements: input, button and error message
const buttonRequest = document.querySelector(".btn");
const inputText = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const errorEmpty = document.querySelector(".error-empty");

// Regex for email
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Function for email validation
function validateEmail(input, button, error, empty) {
  if (!input.value.match(validRegex) && input.value != "") {
    error.style.display = "block";
    button.style.backgroundColor = "#b3ffe2";
  } else if (input.value == "") {
    error.style.display = "none";
    empty.style.display = "block";
  }
}
