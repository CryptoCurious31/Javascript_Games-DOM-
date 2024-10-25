const input = document.getElementById('palindrome-checker');
const submitButton = document.getElementById('check-palindrome');


const checkInput = () => {

    const answer = document.createElement('p');
    answer.classList.add('hint-text');

    if(input[0] === input.length - 1){
        answer.textContent = `${input.value} is a palindrome.`;
    } else if (input[0] !== input.length - 1) {
        answer.textContent = `${input.value} is not a palindrom`;
    }
}

submitButton.addEventListener('click', checkInput);