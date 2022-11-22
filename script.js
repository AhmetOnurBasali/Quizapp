


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
        "right_answer": 3
    }
];




let currentQuestion = 0;



function init() {
    document.getElementById('all-question').innerHTML = questions.length;

    showQuestion();

}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}


function answer(a) {
    let question = questions[currentQuestion];

    let rightAnswer = a.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;


    

    if (rightAnswer == question['right_answer']) {
        document.getElementById(a).parentNode.classList.add('bg-success');
        document.getElementById(a).parentNode.classList.remove('quiz-answer-card');
    }

    else {
        document.getElementById(a).parentNode.classList.add('bg-danger');
        document.getElementById(a).parentNode.classList.remove('quiz-answer-card');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

    }

    document.getElementById('next-button').disabled = false;


}