// Assignment Code - given
var generateBtn = document.querySelector("#generate");
//have array of each type of character
var special = ["!@#$%^&*()_+=-,./?><:;"]
var upperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var lowerCase = ["qwertyuiopasdfghjklzxcvbnm"]
var numbers = ["1234567890"]
// Add event listener to generate button - given code


//set length of min 8, max 128
var passwordLength = parseInt(
  prompt('Choose password length between 8 and 128 characters'),
);



var setLength 
setLength = ">8 || <128"

setLength = window.prompt ("Choose password length between 8 and 128 characters"); 
setLength = window.prompt (); 



// Add event listener to generate button - given
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input - given
var password = ""
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
var passwordCharacters = (setLength, upperCase, lowerCase, special, numbers);


  if (useSpecialcharacters)
    passwordCharacters = passwordCharacters + special;
  if (useUpper)
    passwordCharacters = passwordCharacters + upperCase;
  if (useLower)
    passwordCharacters = passwordCharacters + lowerCase;
  if (useNumbers)
    passwordCharacters = passwordCharacters + numbers;



//write the for loop to run the continuous piece of code
for (var i = 0; i < passwordLength; i++) {
   index = Math.floor(Math.random() * passwordCharacters.length);
    password = password + passwordCharacters[index]


}
return password;

}
