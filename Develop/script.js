
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseAlphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericalAlphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specailChareters = ["!", "@", "#", "$", "%", "&", "*", "?", "+"];
var finalPassword = "";
var passwordLength;
var generateBtn = document.querySelector("#generate");
var wantSpecialCharecters;
var wantUpperCase;
var wantLowerCase;
var wantNumbers;
var mixArray = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

var response;
var passwordLength;
var specChar;

function generatePassword(){
  passwordLength = parseInt(prompt("How many charecters do you want??"));

  while (passwordLength <=8 || passwordLength >= 128){
    console.log("your password length should be between 8 and 128 charecters")
    passwordLength = parseInt(prompt("How many charecters do you want??"));
  }
  wantSpecialCharecters = confirm("Do you want special charecters?");
  wantUpperCase = confirm("Do you want upper case letters?");
  wantLowerCase = confirm("Do you want lower case letters?");
  wantNumbers = confirm("Do you want numbers?");

  var mixArray = [];

  if (wantSpecialCharecters === true){
    mixArray.push(...specailChareters);
  } else {
    console.log("not special bruh");
  }

  if (wantUpperCase === true){
    mixArray.push(...upperCaseAlphabet);
  } else {
    console.log("no uppercase");
  }

  if (wantLowerCase === true){
    mixArray.push(...lowerCaseAlphabet);
  } else {
    console.log("no lowercase");
  }

  if (wantNumbers === true){
    mixArray.push(...numericalAlphabet);
  } else {
    console.log("no numbers");
  }

  console.log(mixArray);

  for(i=0; 1<passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * mixArray.length + 1);
  finalPassword += mixArray[randomNumber];
  }

  console.log(finalPassword)
  console.log("You're mom is crindge")
}

console.log(finalPassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




