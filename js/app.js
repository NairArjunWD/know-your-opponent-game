
let turn = -1;

let currentPlayer = null;

let playerEasy = [];
let playerMedium = [];
let playerHard = [];

let input = [];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');


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
        correctAnswer: 'b'
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

// Augustus ##############******************#####################***************

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

// // Napoleon ##############******************#####################***************

// const napoleonEasy = [
//     {
//         question: 'What was the new French nation called under Napoleon?',
//         answers: {
//             a: 'The French Empire',
//             b: 'The Grand French Empire',
//             c: 'The Great Empire of France',
//             d: 'The Gallic Empire'
//         },
//         correctAnswer: 'a'
//     },

//     {
//         question: 'Which of these countries was Napoleon a fan of and based his empire from?',
//         answers: {
//             a: 'The Greek City States',
//             b: 'The Roman Empire',
//             c: 'The Hunnic Empire',
//             d: 'The Catalonian Empire'
//         },
//         correctAnswer: 'b'
//     },

//     {
//         question: 'What was his son, Napoleon II, named as?',
//         answers: {
//             a: 'King of France',
//             b: 'King of Austria',
//             c: 'King of Rome',
//             d: 'King of Paris'
//         },
//         correctAnswer: 'c'
//     },

//     {
//         question: 'Which year was he born?',
//         answers: {
//             a: '1709',
//             b: '1769',
//             c: '1789',
//             d: '1808'
//         },
//         correctAnswer: 'b'
//     },

//     {
//         question: 'Napoleon was short?',
//         answers: {
//             a: 'True',
//             b: 'False'
//         },
//         correctAnswer: 'b'
//     }
// ]

// // ######### MEDIUM #################### MEDIUM ################################
// const napoleonMedium = [
//     {
//         question: 'What was the name of his famous white horse?',
//         answers: {
//             a: 'Vizir',
//             b: 'Blanco',
//             c: 'Clouttier',
//             d: 'Marengo'
//         },
//         correctAnswer: 'd'
//     },

//     {
//         question: 'What type of sword did Napoleon carry?',
//         answers: {
//             a: 'rapier',
//             b: 'gladdius',
//             c: 'sabre',
//             d: 'epee'
//         },
//         correctAnswer: 'c'
//     },

//     {
//         question: 'How tall is Napoleon by US standards?',
//         answers: {
//             a: "5'7",
//             b: "5'8",
//             c: "5'9",
//             d: "5'10"
//         },
//         correctAnswer: 'a'
//     },

//     {
//         question: 'How do the French people view Napoleon today?',
//         answers: {
//             a: 'Onf of the worst tyrant in French history',
//             b: 'Another Mussolini',
//             c: 'One of the greatest heros in French history',
//             d: 'A Roman fanboy who tried to make France somthing it was not'
//         },
//         correctAnswer: 'c'
//     },

//     {
//         question: 'Who was the final ruler of the House of Bonaparte?',
//         answers: {
//             a: 'Napoleon II',
//             b: 'Napoleon III',
//             c: 'Carlo',
//             d: 'Napoleon IV'
//         },
//         correctAnswer: 'b'
//     }
// ];

// // ########### HARD ######################### HARD ############################

// const napoleonHard = [
//     {
//         question: 'Who was his second wife?',
//         answers: {
//             a: 'Empress Josephine of Austria',
//             b: 'Duchess Marie Louise of Parma',
//             c: 'Princess Maria Thersea of Savoy',
//             d: 'Lady Isabella of Italy'
//         },
//         correctAnswer: 'a'
//     },

//     {
//         question: 'Where is the current locatin of Napoleon’s horse?',
//         answers: {
//             a: 'With Napoleon',
//             b: 'His corpse was lost during Waterloo',
//             c: 'His skeleton is on display in London',
//             d: 'He ran off after Napoleon died; no one knew where he went'
//         },
//         correctAnswer: 'c'
//     },

//     {
//         question: 'What was the name of Napoleon’s Personal Guard?',
//         answers: {
//             a: 'The Napoleon Guard',
//             b: 'The Praetorian Guard',
//             c: 'The Old Guar',
//             d: 'The Imperial Guard'
//         },
//         correctAnswer: 'c'
//     },

//     {
//         question: 'What did Napoleon have a phobia against?',
//         answers: {
//             a: 'Dogs',
//             b: 'Cats',
//             c: 'Spiders',
//             d: 'The English'
//         },
//         correctAnswer: 'b'
//     },

//     {
//         question: 'Napoleon was born on an island that was not originally French. He developed a different accent when he learned French in school as a result. What was the name of this island? ',
//         answers: {
//             a: 'Corsair',
//             b: 'Corzana',
//             c: 'Cortada',
//             d: 'Corsica'
//         },
//         correctAnswer: 'd'
//     }
// ];

// const player2 = [];

// let selectedChoice = null;



// function quizQuestion(){}

// function quizAnswer(){}
class Player {
    constructor(hp, choice){
        this.hp = hp;
        this.choice = choice
    }
    
}

const player1 = new Player(50, player1Choice);
const player2 = new Player(50, player2Choice);

currentPlayer = player1;



// // CLASS FOR CHARACTERS *******************************************************

class Characters {
    constructor(name, hp, easy, medium, hard, img){
        this.name = name;
        this.hp = hp;
        this.easyQ = easy;
        this.mediumQ = medium;
        this.hardQ = hard;
        this.img = img
    }
}

const characterList = {
    belisarius: new Characters('Belisarius', 50, belisariusEasy, belisariusMedium, belisariusHard, './img/Belisarius.png'),

    augustus: new Characters('Augustus', 50, augustusEasy, augustusMedium, augustusHard, './img/Augustus.png'),

    // napoleon: new Characters('Napoleon', 50, napoleonEasy, napoleonMedium, napoleonHard, './img/Napoleon.png')
}


console.log(belisarius)

// TURN COUNTER ############################################################
// let turn = -1;

// PLAYER 1
document.getElementById('close1').onclick = function() {
    turn ++;
    document.getElementById('turn').innerText = "Turn: " + turn;
    console.log('Yes')
}

// PLAYER 2
document.getElementById('close2').onclick = function () {
    turn++;
    document.getElementById('turn').innerText = "Turn: " + turn;
    console.log('Yes')
}



// ############### FUNCTION FOR PLAYER 1 SELECTION #####################################
    $('#wrap').click(e => {
        
        let playerPick = characterList[$(e.target).attr('id')]
        console.log(playerPick)
        console.log(playerPick.easyQ)
        console.log($(`#${playerPick.name.toLowerCase()}-button`))
        if(currentPlayer === player1) {
            $('#box1').css('background-image', `url(${playerPick.img})`)
            $(`#${playerPick.name}`).appendTo("#box2");
            $(`#${playerPick.name.toLowerCase()}-button`).appendTo("#box2");
            $("#row2").appendTo("#box2");
            $("#order2").appendTo("#box2");
            // $((`#${playerPick.easyQ}`).appendTo(playerEasy()))
            $(e.target).hide();
            turn++;
            playerSwitch()
            console.log(turn);
        } else {
            $('#box2').css('background-image', `url(${playerPick.img})`)
            $(`#${playerPick.name}`).appendTo("#box1");
            $(`#${playerPick.name.toLowerCase()}-button`).appendTo("#box1");
            $("#row1").appendTo("#box1");
            $("#order1").appendTo("#box1");
            console.log('we are here')
            $('#wrap').hide();
            turn++;
            playerSwitch()
            console.log(turn);
        }
        
    })



function playerSwitch (){
    if (turn % 2 === 0) {
        currentPlayer = player2Choice;
    } else {
        currentPlayer = player1Choice;
    }
}




console.log(augustusHard);

// console.log(`${playerPick.easy}`);


function player1Choice(e){
    e.preventDefault();
    if ('#belisarius-button'){
        playerEasy = belisariusEasy;
        playerMedium = belisariusMedium;
        playerHard = belisariusHard;
        console.log(playerEasy)
    } else if ('#augustus-button') {
        playerEasy = augustusEasy;
        playerMedium = augustusMedium;
        playerHard = augustusHard;
        console.log(playerEasy)
    }
    
}

function player2Choice(e) {
    e.preventDefault();
    if ('#augustus-button') {
        playerEasy = augustusEasy;
        playerMedium = augustusMedium;
        playerHard = augustusHard;
        console.log(playerEasy)
    }
}


// player1Choice();
// player2Choice();



document.getElementById('belisarius-button').addEventListener('click', player1Choice);
document.getElementById('augustus-button').addEventListener('click', player2Choice);

$(window).on('load', function () {
    $('#myModal').modal('show');
});

function easy () {
    if ('#light1') {
        generateQuiz(playerEasy, quizContainer, resultsContainer, submitButton);
    } else {
        console.log('wait')
    }
}

function medium() {
    if ('#medium1') {
        generateQuiz(playerMedium, quizContainer, resultsContainer, submitButton);
    } else {
        console.log('wait')
    }
}

function hard() {
    if ('#strong1') {
        generateQuiz(playerHard, quizContainer, resultsContainer, submitButton);
    } else {
        console.log('wait')
    }
}

// generateQuiz(input, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
let random;
    function showQuestions(questions, quizContainer) {
        const output = [];
        const answers = [];
        random = Math.floor(5 * Math.random());

        
        // answers = [];

        for (letter in questions[random].answers) {
            answers.push(
                '<label id="answerSelection">'
                + '<input type="radio" name="question' + random + '" value="' + letter + '">'
                + letter + ': '
                + questions[random].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class="question">' + questions[random].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
        

        // code will go here

        quizContainer.innerHTML = output.join('')


    }

    function showResults(questions, quizContainer, resultsContainer) {
        // code will go here
        // gather answer containers from our quiz
        let answerContainers = quizContainer.querySelectorAll('.answers input');
        console.log(quizContainer)
        console.log(answerContainers, "<=== all the inputs")

        // keep track of user's answers
        let userAnswer = '';
        let userInput = null;
        let numCorrect = 0;

        for (let i=0; i<answerContainers.length; i++){
            if (answerContainers[i].checked){
                userAnswer = answerContainers[i].value;
                userInput = answerContainers[i].parentNode;
            }
        }


        // for each question...
        // for (let i = 0; i < questions.length; i++) {

        // find selected answer
        // console.log(answerContainers)
        // userAnswer = (answerContainers[i].querySelector('input[name=question' + random + ']:checked') || {}).value;
        // console.log(userAnswer)
        // if answer is correct
        if (userAnswer === questions[random].correctAnswer) {
            if (turn % 2 === 0) {
                player1.hp -= 10;
                document.getElementById('score1').innerText = "Player 1 HP: " + player1.hp + "/50";
                if (player1.hp <= 0) {
                    alert('Player 2 wins! Time to play again!');
                    window.location.reload();
                }
            } else {
                player2.hp -= 10;
                document.getElementById('score2').innerText = "Player 2 HP: " + player2.hp + "/50";
                if (player2.hp <= 0) {
                    alert('Player 2 wins! Time to play again!');
                    window.location.reload();
                }
            }
            // add to the number of correct answers
            // player1.hp -= 10;
            // document.getElementById('score1').innerText = "Player 1 HP: " + player1.hp + "/50";

            // color the answers green
            userInput.style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            userInput.style.color = 'red';
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


// // CREATE EACH CHARACTER ******************************************************


// DIV TO HOLD THE QUIZ ********************************************************

// CHOOSE THE CHARACTER *******************************************************
generateQuiz(input, quizContainer, resultsContainer, submitButton);

// CHOOSE EASY, MEDUIM, OR HARD ***********************************************




// FUNCTION TO DECIDE OUTCOME *************************************************

// HEAL OPTION

// HEAL FUNCTION


// WIN SCENARIO

// if(player1.hp <= 0) {
//     console.log('Player 2 Wins!');
// }
