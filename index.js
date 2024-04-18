let heading = "Articles";
let i = 0;
let speed = 100;

const type = () => {
    if(i < heading.length) {
        document.querySelector('h1').textContent += heading.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();

const button = document.querySelector('#grade');
const par = document.querySelector('#par');
const answers = document.querySelectorAll('#answer');
button.addEventListener('click', showFinalScore);

function showFinalScore(e) {
    e.preventDefault();
    let score = 0;

    answers.forEach(answer => {
        if(answer.checked) score++;
    })

    par.textContent = 'You answered ' + score + ' out of 10 questions.'
}