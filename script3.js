const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.querySelector("#generate");

//verify what elements have been checked
function myFunction() {
    document.getElementById("uppercase", "lowercase", "numbers", "symbols").checked;
    const text = document.getElementById("text");
    if (lowercaseEl.checked || uppercaseEl.checked || numbersEl.checked || symbolsEl.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    //return console.log("working");
}


myFunction();

// Add event listener to generate button
generateEl.addEventListener("click", () => {
    event.preventDefault();
    const Length = lengthEl.value;
    const hasLowerCase = lowercaseEl.checked;
    const hasUpperCase = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;
    
    if(length > 25 || length < 8){
        alert("pick a number between 8 - 25!");
    };

    generatePassword();
    
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
    var newPassword= getRandomLowerCase() + getRandomUpperCase() + getRandomNumbers() + getRandomSymbols() + length;
    
    var typesCount= (getRandomLowerCase() + getRandomUpperCase() + getRandomNumbers() + getRandomSymbols());
    console.log(typesCount);

    var typesArr= [{lowercase}, {uppercase}, {numbers}, {symbols}] .shuffle;
    console.log(typesArr);    

    
    document.getElementById("password").innerHTML = newPassword;
   
    
    return console.log(newPassword);
};



