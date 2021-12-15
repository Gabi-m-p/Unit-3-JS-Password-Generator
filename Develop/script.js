// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//1. need to enter choice options for password ie letters, numbers, special characters. uppercase or lowercase.
//2. Needs a prompt for length of password.
//3. Needs prompts for each different character choice.
//4. password generated of 8-128 characters.