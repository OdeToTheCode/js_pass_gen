


// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharecters
var okToUSeSpecialChars
var finalPasword= ""

function askQuestions(){
okToUSeSpecialChars = confirm("Do you want to use spectial charecters?"); // move this to the bellow function

}


var response = prompt("How many charecters?");

var numberOfCharecters = parseInt(response);

//use global variables to list out all possible:
  //Special charecters
  //lower case letters
  //upper case letters
  //numbers
//Use an array to display each caticogry



function generatePassword(){
  var numberOfCharecters = parseInt ( prompt("How many charecters??") );
  askQuestions(); 
}

//use a loop to grab a random charecter x number of times

// finalPassword +=



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
















// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars;
var okToUseSpecialChars;
var finalPassword = "";

// use global variables to list out all possible:
   // special characters
   // lower case letters 
   // upper case letters 
   // numbers 

function askQuestions(){
  var response = prompt("How many characters?");
  numberOfChars = parseInt(response);
  okToUseSpecialChars = confirm("Do you want to use special characters?");
}


// use a loop to grab a random characters x number of times

//   finalPassword += 



// Your work starts here
function generatePassword(){
  askQuestions();

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);