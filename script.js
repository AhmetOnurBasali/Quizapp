
let questions = [

    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat Julius Caesar ermordet?",
        "answer_1": "Gaius",
        "answer_2": "Shakespeare",
        "answer_3": "Brutus",
        "answer_4": "Yugi",
        "right_answer": 3
    },
    {
        "question": "Wer hat den Mond zuerst betreten?",
        "answer_1": "buzz",
        "answer_2": "Neils Armstrong",
        "answer_3": "Michael Jackson",
        "answer_4": "Klaus Kinski",
        "right_answer": 2
    },
    {
        "question": "welcher Fisch gibt es zu hauf im Rhein?",
        "answer_1": "Der Lachs",
        "answer_2": "Der Aal",
        "answer_3": "Die sardelle",
        "answer_4": "Die Brasse",
        "right_answer": 4
    },
    {
        "question": "Welches dieser Gebirge ist kein richtiges Gebirge?",
        "answer_1": "Westerwald",
        "answer_2": "Spree",
        "answer_3": "Taunus",
        "answer_4": "Eifel",
        "right_answer": 2
    }
];


let currentQuestion = 0;
let rightQuestions = 0;

let audio_right = new Audio('Audio/correct.mp3');
let audio_wrong = new Audio('Audio/wrong.mp3');



function init() {
    document.getElementById('questions-all').innerHTML = questions.length;

    showQuestion();

}


function showQuestion() {
    if (returnOfEquel()) {
        // ToDo show Endscreen
        todoShowEndscreen();
    }
    else {
        toShowquiz();
    }
}




function returnOfEquel() {
    return currentQuestion >= questions.length

}


function todoShowEndscreen() {
    document.getElementById('Question-card').style = `display:none;`;
    document.getElementById('endscreen').style = ``;
    document.getElementById('question-all').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = `
    verschiedene styles/Quizapp Blue/trophäe.png`;

}


function toShowquiz() {
    let thequestion = questions[currentQuestion]
    let theanswer = questions[currentQuestion]
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').style = `width:${percent}%;`;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;

    document.getElementById('nr-of-question').innerHTML = currentQuestion + 1;

    document.getElementById('the-Question').innerHTML = thequestion['question'];
    document.getElementById('answer_1').innerHTML = theanswer['answer_1'];
    document.getElementById('answer_2').innerHTML = theanswer['answer_2'];
    document.getElementById('answer_3').innerHTML = theanswer['answer_3'];
    document.getElementById('answer_4').innerHTML = theanswer['answer_4'];
}


function answer(a) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = a.slice(-1);

    let idOfTheRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(a).parentNode.classList.add('bg-success');
        audio_right.play();
        rightQuestions++;
    }
    else {
        document.getElementById(a).parentNode.classList.add('bg-danger');
        document.getElementById(idOfTheRightAnswer).parentNode.classList.add('bg-success');
        audio_wrong.play();
    }
    document.getElementById('next-button').disabled = false;

}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.getElementById('next-button').disabled = true;
    removeButton();


}


function removeButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

}


function restart() {
    document.getElementById('header-img').src = `verschiedene styles/Quizapp Blue/Group 5.png`;

    currentQuestion = 0;
    rightQuestions = 0;

    document.getElementById('Question-card').style = ``;
    document.getElementById('endscreen').style = `display:none;`;

    init();

}






