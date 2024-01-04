const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.getElementById('result');
const form = document.querySelector("#form");

function formatInputText(text){
    const regex = /[\s-.,_:()\\/]/g;
    let corrected = text.replace(regex, "");
    return corrected.toLowerCase();
}

function stopreload(e){
e.preventDefault();
checkTextForPalindrome();
}

function reverseText(text){
    let splitedText = text.split("");
    let reversedArray = splitedText.reverse();
    return  reversedArray.join("");
}

function checkTextForPalindrome(){
    const userInput = textInput.value;
    const formattedtext = formatInputText(userInput);
    if(userInput === ""){
        alert("Please input a value");
    }
    else if(formattedtext === reverseText(formattedtext)){
        let response = `${userInput} is a palindrome`;
        displayResult(response);
    }
    else{
        let response =`${userInput} is not a palindrome`;
        displayResult(response);
    } 
}

function displayResult(response){
    result.classList.remove('hide');
    result.innerText = "" + response;
}

form.addEventListener("submit", stopreload);