


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
