const resultEl=document.getElementById("result");
const lengthEl=document.getElementById("length");
const uppercaseEl=document.getElementById("upperCase");
const lowercaseEl=document.getElementById("lowerCase");
const numbersEl=document.getElementById("numbers");
const symbolsEl=document.getElementById("symbols");
const generateEl=document.querySelector("#generate");

//verify what elements have been checked
function myFunction() {
    document.getElementById("uppercase").checked;
    const text= document.getElementById("text");
    if (lowercaseEl.checked || uppercaseEl.checked || numbersEl.checked || symbolsEl.checked ==true){
        text.style.display = "block";
        console.log("working");
    } else{
        text.style.display = "none";
    }
}

// Add event listener to generate button
generateEl.addEventListener("click", ()=> {
    
    const Length = lengthEl.value;
    const hasLowerCase= lowercaseEl.checked;
    const hasUpperCase= uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbol= symbolsEl.checked;
  
    text =generatedPassword(hasLowerCase, hasUpperCase, hasNumber, hasSymbol, Length);
    resultEl.innerText = text
});

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    console.log('typesCount:', typesCount);
    const typeArr=[{lower}, {upper}, {number}, {symbol}].filter
    {item=>Object.values(item)[0]
    };
    
    if(typesCount === 0){
        return"";
    }

    for(let i=0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const FuncName = Object.keys(type)[0];

            generatePassword += randomFunc[FuncName]();
        });
    }
}

// const finalPassword= generatedPassword.slice(0,length);
//     return finalPassword
            
    

//generate function - http://www.net-comber.com/charset.html
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
//console.log(getRandomLower());

function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}
//console.log(getRandomUpperCase());

function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +48);
}
//console.log(getRandomNumbers());

function getRandomSymbol(){
    const symbol= '!@#$%^&*(){}[]/,.';
    return symbol[Math.floor(Math.random() * symbols.length)];
};
//console.log(getRandomSymbol());

const randomFunc = {
    lower: getRandomLowerCase, 
    upper: getRandomUpperCase,
    number: getRandomNumbers,
    symbol: getRandomSymbol 
};
