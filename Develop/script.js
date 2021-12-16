// Assignment Code - given
var generateBtn = document.querySelector("#generate");


//have array of each type of character
var special = ["!@#$%^&*()_+=-,./?><:;"]
var upperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var lowerCase = ["qwertyuiopasdfghjklzxcvbnm"]
var numbers = ["1234567890"]


var characterCollection = ""
var password = ""
// Add event listener to generate button - given code


//set length of min 8, max 128
var passwordLength = parseInt(
  prompt('Choose password length between 8 and 128 characters'),
);



var setLength 
setLength = ">8 || <128"

setLength = window.prompt (); 
    
  

// Add event listener to generate button - given
// Write password to the #password input - given
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var password = generatePassword();
function generatePassword(){
  

  generateBtn.addEventListener("click", writePassword);

//use prompts to determine what characters the user wants to include in password.

var useUpper = window.confirm ("Do you want to include uppercase letters in your password?");
var useLower = window.confirm ("Do you want to include lowercase letters in your password?");
var useSpecialcharacters = window.confirm ("Do you wany to include special characters in your password?");
var useNumbers = window.confirm ("Do you want to include numbers in your password?")


  
var characterCollections = []
if (useSpecialcharacters)
characterCollections.push(specialcharacters)

if (useUpper)
characterCollections.push(upperCaseCharacters)

if (useLower)
characterCollections.push(lowerCaseCharacters)

if (useNumbers)
characterCollections.push(numbersCharacters)
      
var password = ""
for (var i = 0; i < passwordLength; i++) {
        var characterCollectionIndex = Math.floor(Math.random() * characterCollections.length);
        var characterCollection = characterCollections[characterCollectionIndex]
    
        var characterIndex = Math.floor(Math.random() * characterCollection.length);
        var character = characterCollection[characterIndex]
    
        password = password + character
        
}
return password;

}

// Write password to the #password input - given


// Add event listener to generate button - given code





// pick one of each then randomly loop through the rest of the characters.?
//set length of min 8, max 128

//1. need to enter choice options for password ie letters, numbers, special characters. uppercase or lowercase.
//2. Needs a prompt for length of password.
//3. Needs prompts for each different character choice.
//4. password generated of 8-128 characters.