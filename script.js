// JavaScript is Great...(-_+)

// Display & Copy
const display = document.getElementById('display');
const copy = document.getElementById('copy');

// Range
const slider = document.getElementById('slider');
const output = document.getElementById('output');

// Items
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

// Button
const btn = document.getElementById('btn');

// Range Value
slider.addEventListener('input', () => {
  output.textContent = slider.value;
});


// Generate Password
btn.addEventListener('click', () => {

  let characters = "";

  // Uppercase
  if (uppercase.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Lowercase
  if (lowercase.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  // Numbers
  if (numbers.checked) {
    characters += "0123456789";
  }

  // Symbols
  if (symbols.checked) {
    characters += "!@#$%^&*()_+-=[]{}";
  }

  // Check options
  if (characters === "") {
    display.value = "";
    alert("Please select at least one option.");
    return;
  }

  // Generate Characters
  let password = "";

  for (let i = 0; i < Number(slider.value); i++) {


    const randomIndex = Math.floor(Math.random() * characters.length);

      password += characters[randomIndex];
    }

  // Show password
  display.value = password;
});

// Copy Password
copy.addEventListener('click', () => {

  if (display.value !== "") {
    navigator.clipboard.writeText(display.value);
  }
  
});