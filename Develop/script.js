
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseAlphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericalAlphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specailChareters = ["!", "@", "#", "$", "%", "&", "*", "?", "+"];
var finalPassword = "";
var generateBtn = document.querySelector("#generate");


// Assignment Code
var generateBtn = document.querySelector("#generate");

var response;
var passwordLength;
var specChar;

function generatePassword(){
  askQuestions
}


function askQuestions() {
  response = prompt("How many characters?");
  passwordLength = parseInt(response);
  specChar = confirm("Do you want to use special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




