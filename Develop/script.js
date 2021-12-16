// Assignment Code - given
var generateBtn = document.querySelector("#generate");


//have array of each type of character
var specialChar = ["!@#$%^&*()_+=-,./?><:;"]
var charUpper = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var charLower = ["qwertyuiopasdfghjklzxcvbnm"]
var charNumber = ["1234567890"]


//set length of min 8, max 128

var setLength = window.prompt ("Choose password length between 8 and 128 characters") 
  if (setLength < 8 || setLength > 128)
console.log = "passwordlength"
  


// Write password to the #password input - given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - given
generateBtn.addEventListener("click", writePassword);


// then do the prompts
// pick one of each then randomly loop through the rest of the characters.
//set length of min 8, max 128

//1. need to enter choice options for password ie letters, numbers, special characters. uppercase or lowercase.
//2. Needs a prompt for length of password.
//3. Needs prompts for each different character choice.
//4. password generated of 8-128 characters.