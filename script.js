// Assignment Code
var generateBtn = document.querySelector("#generate");

//when the user clicks on the generate password button, show message
generateBtn.onFocus= function(){
  document.getElementById("message").style.display= "block";
}

//When the user clicks outside of the generate password button, hide the message
generateBtn.onBlur= function(){
  document.getElementById("message").style.display="none";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var myInput = documnet.getElementById("psw");
var letter = document.getElementById("letter");
var capitol = document.getElementById("capital");
var number = document.getElementById("number");
var specialCharacter = document.getElementById("specialcharacter");
var length = document.getElementById("length");

//validate lowercase letter
myInput.onkeyup= function(){
  var lowerCaseLetters= /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}
//validate upper case letter
myInput.onkeyup= function(){
  var upperCaseLetters= /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}
// Validate number
myInput.onkeyup= function(){
  var numbers= /[0-9]/g;
  if(myInput.value.match(numbers)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}
//validate special character
myInput.onkeyup= function(){
  var specialCharacter= /[!@#$%^&*"']/g;
  if(myInput.value.match(specialCharacter)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}
//Validate length
  if(myInput.value.length >= 8){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


