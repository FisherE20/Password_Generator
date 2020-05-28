const resultEl=document.getElementById("result");
const lengthEl=document.getElementById("length");
const uppercaseEl=document.getElementById("uppercase");
const lowercaseEl=document.getElementById("lowercase");
const numbersEl=document.getElementById("numbers");
const symbolsEl=document.getElementById("symbols");
const generateEL=document.getElementById("generate");

const randomFunc ={
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols,
};

// Add event listener to generate button
generateEL.addEventListener("click", () =>{
    const length = +lengthEl.value;
    const hasLower= lowercaseEl.checked;
    const hasUpper= uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbol= symbolsEl.checked;


resultEl.innerText. generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
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
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +48);
}

function getRandomSymbols(){
    const symbols= '!@#$%^&*(){}[]/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomResult(){
    return 
}