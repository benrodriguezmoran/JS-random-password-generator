// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*",
"+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
"?", "@", "[", "\\", "]", "^", "_", "`", "{", "|",
"}", "~"];

function generatePassword(boolU,boolL,boolN,boolS,charCount) {
  let password = ""
  let activeChars = []
  if (boolU) {activeChars = activeChars.concat(lower);}
  if (boolL) {activeChars = activeChars.concat(upper);}
  if (boolN) {activeChars = activeChars.concat(numbers);}
  if (boolS) {activeChars = activeChars.concat(special);}
  console.log(activeChars);
  for (let index = 0; index < charCount; index++) {
    currentChar = activeChars[Math.floor(Math.random() * (activeChars.length-1))];
    password += currentChar;
    console.log(index);
  }
  return password;

}
// Write password to the #password input
function writePassword() {
  let charCount = prompt("How many characters?","10");
  if (!Number.isInteger(Number(charCount))) {alert("Count must be an integer");writePassword();return;}
  if (charCount < 8) {alert("Password cannot be less than 8 characters");writePassword();return;}
  if (charCount > 128) {alert("Password cannot be more than 128 characters");writePassword();return;}  
  let answer
  answer = prompt("Use upper case? (Y)/N");
  if (answer.toUpperCase() === "N") {boolU = false} else {boolU = true}
  answer = prompt("Use lower case? (Y)/N");
  if (answer.toUpperCase() === "N") {boolL = false} else {boolL = true}
  answer = prompt("Use numbers? (Y)/N");
  if (answer.toUpperCase() === "N") {boolN = false} else {boolN = true}
  answer = prompt("Use special characters? (Y)/N");
  if (answer.toUpperCase() === "N") {boolS = false} else {boolS = true}
  if ((!boolU && !boolL && !boolN && !boolS)) {alert("Password must contain one type of character");writePassword();return;}
  var password = generatePassword(boolU,boolL,boolN,boolS,charCount);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
