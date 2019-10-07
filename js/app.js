// const player1;
// const player2;

// let selectedChoice = null;



// function quizQuestion(){}

// function quizAnswer(){}


// // CLASS FOR CHARACTERS *******************************************************

// class Characters {
//     constructor(name)

//     name = this.name;
//     hp = 50;
//     easyQ = [];
//     mediumQ = [];
//     hardQ = [];
//     easyA = [];
//     mediumA = [];
//     hardA = [];

// }





// // CREATE EACH CHARACTER ******************************************************

// const belisarius = new Characters(Belisarius);

// const augustus = new Characters(Augustus);

// QUESTIONS ******************************************************************

// Belisarius

const belisariusEasy = [
    {
        question: 'Who was his best friend?',
        answers: {
            a: 'Narses',
            b: 'Justinian I',
            c: 'Theodora',
            d: 'Stilicho'
        },
        correctAnswer: 'b' 
    },

    {
        question: 'Which battle made him famous?',
        answers: {
            a: 'Dara',
            b: 'Seige of Rome',
            c: 'Callinicum',
            d: 'Tricamarum'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Who was his wife?',
        answers: {
            a: 'Theodora',
            b: 'Antonina',
            c: 'Vespia',
            d: 'Irene'
        },
        correctAnswer: 'a'
    },

    {
        question: 'What color was his horse?',
        answers: {
            a: 'White',
            b: 'Black',
            c: 'Red',
            d: 'Green'
        },
        correctAnswer: 'a'
    },

    {
        question: 'He was a natural born citizen of Eastern Rome?',
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    }
]

// ######### MEDIUM #################### MEDIUM ################################
const belisariusMedium = [
    {
        question: 'What was his childhood status?',
        answers: {
            a: 'Germanic peasant of an Illyrian mother and Thracian father',
            b: 'Nomadic trader of an Armenian mother and Hunnic father',
            c: 'Anatolian blacksmith of an Egyptian mother and Phonecian father',
            d: 'Western Roman nobility of a Norse mother and Roman father'
        },
        correctAnswer: 'a'
    },

    {
        question: 'What did he do to any slave he was given?',
        answers: {
            a: 'Have them work in this estate',
            b: 'Train them to be apart of his Legion',
            c: 'Send them to the field to act as medics',
            d: 'Free them from slavery'
        },
        correctAnswer: 'd'
    },

    {
        question: 'Which enemy did he hate the most?',
        answers: {
            a: 'Sassanids',
            b: 'Visigoths',
            c: 'Nero',
            d: 'Ostrogoths'
        },
        correctAnswer: 'd'
    },

    {
        question: 'What did he popularize that is widely used today?',
        answers: {
            a: 'Passwords',
            b: 'Ciphers',
            c: 'Beards',
            d: 'Battlefield Medics'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Why did he not accept the Emperor’s offer to be the Western Roman Emperor after he helped reunify the Empire?',
        answers: {
            a: 'He wanted to retire in solitude',
            b: 'He was too loyal to the Emperor',
            c: 'His wife was ill and he wanted to be by her side',
            d: 'He caught the plage and was too sick to work'
        },
        correctAnswer: 'b'
    }
]

// ########### HARD ######################### HARD ############################

const belisariusHard = [
    {
        question: 'Whose statues and busts did he throw over the walls of Rome to prevent the Goths from getting into the city?',
        answers: {
            a: 'Nero',
            b: 'Claudius',
            c: 'Caligula',
            d: 'Trajan'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Which Legion did he command?',
        answers: {
            a: 'IX',
            b: 'X',
            c: 'XI',
            d: 'XII'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Which year did he come out of retirement for one last battle?',
        answers: {
            a: '559',
            b: '560',
            c: '561',
            d: '562'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Many regarded him as a sign from God, because of his name. What did his name mean?',
        answers: {
            a: 'Dart of Ares',
            b: 'Arrow of Ares',
            c: 'Sword of Ares',
            d: 'Son of Ares'
        },
        correctAnswer: 'b'
    },

    {
        question: 'The common peasant surname, Flavius, became famous because of him. What does Flavius mean?',
        answers: {
            a: 'Axeman',
            b: 'Blonde haired',
            c: 'Soldier',
            d: 'Pale skinned'
        },
        correctAnswer: 'b'
    }
]

// Augustus

const augustusEasy = [
    {
        question: 'Who did he hate the most?',
        answers: {
            a: 'Lepidus',
            b: 'Antonius',
            c: 'Pompeius',
            d: 'Cleopatra'
        },
        correctAnswer: 'b'
    },

    {
        question: 'Why did no one believe he’d achieve anything?',
        answers: {
            a: 'He was born with a weak body',
            b: 'He was born into the Plebian class',
            c: 'He was born into the Patrician class',
            d: 'He was dyslexic'
        },
        correctAnswer: 'a'
    },

    {
        question: 'How old was he when Julius Caesar left him everything in his will?',
        answers: {
            a: '12',
            b: '16',
            c: '19',
            d: '25'
        },
        correctAnswer: 'c'
    },

    {
        question: 'How did he view he the conspirators of Julius Caesar’s assassination?',
        answers: {
            a: 'Enemies of Rome',
            b: 'Heroes of Rome',
            c: 'A Necessary Evil',
            d: 'Cowards for stabbing Caesar so many times instead of one on one'
        },
        correctAnswer: 'a'
    },

    {
        question: 'The reason he hated Marc Anthony was because he took Cleopatra from him.',
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    }
]

// ######### MEDIUM #################### MEDIUM ################################
const augustusMedium = [
    {
        question: 'Despite his weak body, what was he considered a great commander?',
        answers: {
            a: 'His silver tongue was able to convince the enemies to not fight',
            b: 'His philosophy helped calm his soldiers during troubled times',
            c: 'He was a master strategist and tactician who was always able to beat his enemies.',
            d: 'His desire to put his troops before his own needs and comfort'
        },
        correctAnswer: 'c'
    },

    {
        question: 'What was his birth name?',
        answers: {
            a: 'Gaius Octavius',
            b: 'Gaius Octavius Caesar',
            c: 'Gaius Octavius Augustus',
            d: 'Gaius Octavius Medrorianus'
        },
        correctAnswer: 'b'
    },

    {
        question: 'What does he consider to be the worst moment of his career?',
        answers: {
            a: 'The Battle of the Teutoburg Forest',
            b: 'The Battle of Philippi',
            c: 'Negotiations with Julius Caesars assassins',
            d: 'The loss of Ravena'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Instead of the First Emperor of Rome, what did he consider himself to be?',
        answers: {
            a: 'The First Leader of Rome',
            b: 'The First Citizen of Rome',
            c: 'The First Father of Rome',
            d: 'The First Son of Rome'
        },
        correctAnswer: 'b'
    },

    {
        question: 'When he visited a senator’s house, one of the senator’s slaves dropped a plate and broke it. The slave fell to Caesar’s feet and begged him to save him, because the senator would feed his slaves to lampries whenever they ever broke his plates. What did Caesar do after this?',
        answers: {
            a: 'He didn’t care and let the senator kill the slave',
            b: 'He bought the slave to save him',
            c: 'He and his soldiers gathered all the plates in the house and smashed them at the senator’s feet',
            d: 'He had the senator arrested and executed by feeding him to his own lampries'
        },
        correctAnswer: 'c'
    }
];

// ########### HARD ######################### HARD ############################

const augustusHard = [
    {
        question: 'What was one of the propaganda used to insult Augustus?',
        answers: {
            a: 'He has sex with his sister',
            b: 'He has sex with his mother',
            c: 'He has sex with men',
            d: 'He has sex with his sister in law'
        },
        correctAnswer: 'a'
    },

    {
        question: 'What was his regnal name?',
        answers: {
            a: 'Imperator Caesar Unis Vilius Augustus',
            b: 'Imperator Caesar Volken Ravena Augustus',
            c: 'Imperator Caesar Iupiter Romani Augustus',
            d: 'Imperator Caesar Divi Filius Augustus'
        },
        correctAnswer: 'a'
    },

    {
        question: 'What was the name of his dynasty?',
        answers: {
            a: 'Caesar-Imperium',
            b: 'Caesar-Augustus',
            c: 'Julio-Claudian',
            d: 'Julio-Caligiani'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Which of these women were not a wife of Augustus?',
        answers: {
            a: 'Clodia Pulchra',
            b: 'Scribonia',
            c: 'Livia Drusilla',
            d: 'Octavia Minor'
        },
        correctAnswer: 'd'
    },

    {
        question: 'Which were some of his last words?',
        answers: {
            a: '“Have I played the part well? Then applaud as I exit.”',
            b: '“I should have killed Marc Anthony sooner.”',
            c: '“I have given Rome everything. May she receive the same love from my descendants.”',
            d: '“Hello grandmother.”'
        },
        correctAnswer: 'a'
    }
];
console.log(augustusHard);
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
console.log(augustusHard[2]);

let input = [];

function easy () {
    if ('#light1') {
        generateQuiz(augustusEasy, quizContainer, resultsContainer, submitButton);
    } else {
        console.log('wait')
    }
}

function medium() {
    if ('#medium1') {
        generateQuiz(augustusMedium, quizContainer, resultsContainer, submitButton);
    } else {
        console.log('wait')
    }
}

function hard() {
    if ('#strong1') {
        generateQuiz(augustusHard, quizContainer, resultsContainer, submitButton);
    } else {
        console.log('wait')
    }
}

generateQuiz(input, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;
        

        for (let i = 0; i < questions.length; i++){
            answers = [];

            for (letter in questions[i].answers) {
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // code will go here

        quizContainer.innerHTML = output.join('')

    }

    function showResults(questions, quizContainer, resultsContainer) {
        // code will go here
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

    }
    

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}



// DIV TO HOLD THE QUIZ ********************************************************

// CHOOSE THE CHARACTER *******************************************************


// CHOOSE EASY, MEDUIM, OR HARD ***********************************************



// FUNCTION TO DECIDE OUTCOME *************************************************

// HEAL OPTION

// HEAL FUNCTION


// WIN SCENARIO




// answers.push(
//     '<label>'
//     + '<input type="radio" name="question' + 2 + '" value="' + letter + '">'
//     + letter + ': '
//     + augustusHard[2].answers[letter]
//     + '</label>'
// );

// output.push(
//     '<div class="question">' + augustusHard[i].question + '</div>'
//     + '<div class="answers">' + answers.join('') + '</div>'
// );