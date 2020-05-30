const resultEl=document.getElementById("result");
const lengthEl=document.getElementById("length");
const uppercaseEl=document.getElementById("upperCase");
const lowercaseEl=document.getElementById("lowerCase");
const numbersEl=document.getElementById("numbers");
const symbolsEl=document.getElementById("symbols");
const generateEL=document.getElementById("generate");

/*const randomFunction = {
    // lower: getRandomLower,
    lower: confirm("WOuld you like lower case letters in your password?"),
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols 
}*/


// Add event listener to generate button
generate.addEventListener("click", ()=> {
    event.preventDefault();
    const hasLength = length.value;
    const hasLowerCase= lowercaseEl.checked;
    const hasUpperCase= uppercaseEl.checked;
    const hasNumbers= numbersEl.checked;
    const hasSymbol= symbolsEl.checked;

    const randomFunction = {
        // lower: getRandomLower,
        len: hasLength,
        lower: hasLowerCase,
        upper:hasUpperCase,
        number: hasNumbers,
        symbol: hasSymbol 
    }

//console.log(hasLowerCase, hasUpperCase, hasNumbers, hasSymbol);

resultEl.innertext= genratePassword(
    hasLowerCase, hasUpperCase, hasNumbers, hasSymbol, hasLength
);

});

function generatePassword(lower, upper, number, symbol, length){
    let generatePassword="";

    const typesCount= lower + upper + number + symbol;
    //console.log('typesCount:', typesCount);
    
    const typeArr=[{lower}, {upper}, {number}, {symbol}].filter
    //console.log("typesArr:", typesArr);
    {
        item=> Object.values(item)[0]
    };
    if(typesCount ===0){
        return"";
    }
    for(let i=0; i < length; i+= typesCount){
        typesArr.forEach(type=>{
            const FuncName = Object.keys(types)[0];

            generatePassword += randomFunc[FuncName]();
            
            });
        }
    }

//generate function - http://www.net-comber.com/charset.html
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +48);
}

function getRandomSymbol(){
    const symbols= '!@#$%^&*(){}[]/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomResult(getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbols, length){
  
}



