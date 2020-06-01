const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.querySelector("#generate");

//verify what elements have been checked
function myFunction() {
    var allowed = "";
    if (lowercase.checked == true) {
        allowed += lowercaseEl;
    }
    //return console.log("working");

    // this is for uppercase check box
    if (uppercase.checked == true) {
        allowed += uppercaseEl;
    }

    // this is for numbers check box
    if (numbers.checked == true) {
        allowed += numbersEl;

    }
    // this is for symbols checked box
    if (symbols.checked == true) {
        allowed += symbolsEl

    }
    return allowed;
}


// Add event listener to generate button
generateEl.addEventListener("click", () => {
    event.preventDefault();
    const length = lengthEl.value;
    const hasLowerCase = lowercaseEl.checked;
    const hasUpperCase = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    if (length > 25 || length < 8) {
        alert("pick a number between 8 - 25!");
    } else {
        generatePassword();
    }



});


//generate function - http://www.net-comber.com/charset.html
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log(getRandomLower());

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log(getRandomUpperCase());

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//console.log(getRandomNumbers());

function getRandomSymbols() {
    const symbols = '!@#$%^&*(){}[]/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
};
//console.log(getRandomSymbol());

function generatePassword() {
    var checkedbox= myFunction();
    console.log(checkedbox);
    var randomFunctions = [getRandomLowerCase() , getRandomUpperCase() , getRandomNumbers() , getRandomSymbols()];
    var newPassword= "";
    const length = parseInt (lengthEl.value);
    console.log(length);
    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * 3);
        console.log(random);
        newPassword += randomFunctions[random];
    }



    document.getElementById("password").innerHTML = newPassword;


    return console.log(newPassword);
};



