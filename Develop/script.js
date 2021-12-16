// Assignment Code - given
var generateBtn = document.querySelector("#generate");


//have array of each type of character
var special = ["!@#$%^&*()_+=-,./?><:;"]
var upperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var lowerCase = ["qwertyuiopasdfghjklzxcvbnm"]
var numbers = ["1234567890"]

// Add event listener to generate button - given code
generateBtn.addEventListener("click", writePassword);

//set length of min 8, max 128

var setLength = window.prompt ("Choose password length between 8 and 128 characters"); 
  if (setLength === < 8 || setLength > 128)

  
console.log = "set password length"
  

// Add event listener to generate button - given


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
//use prompts to determine what characters the user wants to include in password.

var useUpper = window.confirm ("Do you want to include uppercase letters in your password?");
var useLower = window.confirm ("Do you want to include lowercase letters in your password?");
var useSpecialcharacters = window.confirm ("Do you wany to include special characters in your password?");
var useNumbers = window.confirm ("Do you want to include numbers in your password?")

}

console.log ("Using special characters?", useSpecialcharacters);
console.log ("Using uppercase letters?", useUpper);
console.log ("Using lowercase characters?", useLower);
console.log ("Using numbers?", useNumbers);



// Write password to the #password input - given


// Add event listener to generate button - given code
generateBtn.addEventListener("click", writePassword);




// pick one of each then randomly loop through the rest of the characters.?
//set length of min 8, max 128

//1. need to enter choice options for password ie letters, numbers, special characters. uppercase or lowercase.
//2. Needs a prompt for length of password.
//3. Needs prompts for each different character choice.
//4. password generated of 8-128 characters.