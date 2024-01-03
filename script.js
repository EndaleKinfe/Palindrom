const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function formatInputText(text){
    const regex = /[.,-_:/s/]/g;
    let corrected = text.replace(regex, "");
    return corrected.toLowerCase();
}

function reverseText(text){
    let splitedText = text.split("");
    let reversedArray = splitedText.reverse();
    return  reversedArray.join("");
}

function checkTextForPalindrome(){
    const userInput = textInput.value;
    const formattedtext = formatInputText(userInput);
    if(formattedtext === reverseText(formattedtext)){
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

checkBtn.addEventListener("submit", event =>{
    checkTextForPalindrome();
 event.preventDefault();});