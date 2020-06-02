const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.querySelector("#generate");

//verify what elements have been checked
function myFunction() {
    
    const hasLowerCase = lowercaseEl.checked;
    const hasUpperCase = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;
   
    var allowed= [0,0,0,0];
    if (hasLowerCase == true) {
        allowed[0]=1;
    }
    
    // this is for uppercase check box
    if (hasUpperCase == true) {
        allowed[1]=1;
    }

    // this is for numbers check box
    if (hasNumbers == true) {
        allowed[2]=1;

    }
    // this is for symbols checked box
    if (hasSymbols == true) {
        allowed[3]=1;
    }
   
    console.log(allowed);
    return allowed;
}


// Add event listener to generate button
generateEl.addEventListener("click", () => {
    event.preventDefault();
    const length = lengthEl.value;
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
    var checkedbox= myFunction();//Receiving user preferences on lowercase, uppercase, numbers, symbols...
    //ARRAY: 0:lowercase, 1:uppercase, 2:number, 3:symbols
    

   
    
    var newPassword= "";

    //get password length
    const length = parseInt (lengthEl.value);
    
    var passwordBucket = []
    //make password random
    for (var i = 0; i < length; i++) {
         //Possible functions
        var randomFunctions = [getRandomLowerCase() , getRandomUpperCase() , getRandomNumbers() , getRandomSymbols()];
        //get random number 0-3
        var random = Math.floor(Math.random() * 4);

        if(checkedbox[0]==1 && random == 0){
            passwordBucket.push(getRandomLowerCase());
        }
        if(checkedbox[1]==1 && random == 1){
            passwordBucket.push(getRandomUpperCase());
        }
        if(checkedbox[2]==1 && random == 2){
            passwordBucket.push(getRandomNumbers());
        }
        if(checkedbox[3]==1&& random == 0){
            passwordBucket.push(getRandomSymbols());
        }

        
        console.log(passwordBucket);
        newPassword += randomFunctions[random];
    }

    document.getElementById("password").innerHTML = newPassword;


    return console.log(newPassword);
};



