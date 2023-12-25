let userInput = prompt('Enter your Quiz type (HTML/CSS/scienceQuestions/gk/noquiz):');
let move_speed = 8,
    gravity = 0.5;
    let questionIndex = 0;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');

let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');



let background = document.querySelector('.background').getBoundingClientRect();
let bird_props = bird.getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');
let highScore = localStorage.getItem('highScore') || 0;

const im = document.getElementById("lvup");
im.addEventListener("click", function () {
    move_speed = move_speed + 5;
    alert("Speed increases to " + move_speed);
});
const imgg = document.getElementById("lvd");
imgg.addEventListener("click", function () {
    move_speed = move_speed - 5;
    alert("Speed decreases to " + move_speed);
});
const HTML= [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language "
        ,"Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyperlink and Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<li>", "<ul>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a href='http://www.example.com'>Example</a>", "<link src='http://www.example.com'>Example</link>", "<hyperlink>http://www.example.com</hyperlink>", "<href>http://www.example.com</href>"],
        answer: "<a href='http://www.example.com'>Example</a>"
    },
    {
        question: "Which tag is used to insert a line break in HTML?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "What is the correct HTML for creating a table?",
        options: ["<table><tr><td></td></tr></table>", "<tab><row><col></col></row></tab>", "<tbl><trow><tcol></tcol></trow></tbl>", "<tr><table><td></td></table></tr>"],
        answer: "<table><tr><td></td></tr></table>"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
        options: ["alt", "title", "src", "alt-text"],
        answer: "alt"
    },
    {
        question: "Which HTML tag is used to define the footer of a document or section?",
        options: ["<footer>", "<end>", "<section>", "<bottom>"],
        answer: "<footer>"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<bgcolor=yellow>", "<bg style='color:yellow;'>"],
        answer: "<body style='background-color:yellow;'>"
    },
    {
        question: "Which HTML tag is used to define a section or division in an HTML document?",
        options: ["<section>", "<div>", "<division>", "<sep>"],
        answer: "<div>"
    },
    {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        options: ["required", "mandatory", "validate", "fill"],
        answer: "required"
    }
];

const CSS = [
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "text-color", "font-color", "foreground-color"],
        answer: "color"
    },
    {
        question: "Which property is used to control the space between elements?",
        options: ["margin", "padding", "space", "distance"],
        answer: "margin"
    },
    {
        question: "What does 'float' property in CSS do?",
        options: ["Moves the element to the right", "Moves the element out of the document flow", "Flattens the element", "Makes the element transparent"],
        answer: "Moves the element out of the document flow"
    },
    {
        question: "Which property is used to create rounded corners in CSS?",
        options: ["border-radius", "corner-radius", "rounded-style", "curve-border"],
        answer: "border-radius"
    },
    {
        question: "In CSS, which property is used to set the background color of an element?",
        options: ["background-color", "bgcolor", "color-background", "bg-color"],
        answer: "background-color"
    },
    {
        question: "Which CSS property controls the text size relative to its parent element?",
        options: ["font-size", "text-size", "type-size", "size"],
        answer: "font-size"
    },
    {
        question: "What does the z-index property in CSS control?",
        options: ["Text alignment", "Element's stacking order", "Font weight", "Text size"],
        answer: "Element's stacking order"
    },
    {
        question: "Which CSS property is used to make text bold?",
        options: ["font-weight", "text-weight", "bold", "font-bold"],
        answer: "font-weight"
    },
    {
        question: "What is the correct CSS syntax for making all the elements bold?",
        options: ["p {font-weight:bold;}", "p {text-style:bold;}", "p {font:bold;}", "p {style:bold;}"],
        answer: "p {font-weight:bold;}"
    }
];


const scienceQuestions = [
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Fe"
    },
    {
        question: "What is the chemical symbol for lead?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Pb"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Heart", "Brain", "Skin"],
        answer: "Skin"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "What is the process by which plants make their own food called?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        answer: "Photosynthesis"
    },
    {
        question: "Which scientist is known for the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the unit of electric current?",
        options: ["Ohm", "Watt", "Volt", "Ampere"],
        answer: "Ampere"
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Radius", "Patella"],
        answer: "Stapes"
    },
];
const gk = [
    {
        question: "When the demonetisation happen?",
        options: ["8Nov,2016", "6Nov,2016", "7Nov,2016", "9Nov,2016"],
        answer: "8Nov,2016"
    },
    {
        question: "Who is the iron man of India?",
        options: ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        answer: "Sardar Vallabhbhai Patel"
    },
    {
        question: "When was chandrayaan-3 launched?",
        options: ["15July,2023", "14July,2023", "17July,2023", "19July,2023"],
        answer: "14July,2023"

    },
    {
        question: "What is the national sports of India?",
        options: ["Football", "Cricket", "None of these", "Hockey"],
        answer: "None of these"
    },
    {
        question: "English is offical language of which State/UT?",
        options: ["Goa", "Pondicherry", "Nagaland", "Tripura"],
        answer: "Nagaland"
    },
    {
        question: "Whose autobigraphy is titled 'Ace against Odds'?",
        options: ["Sania Mirza", "Sania Nehwal", "Mirabai Chanu", "Mary Kom"],
        answer: "Sania Mirza"
    },
    {
        question: "Who among the following designed the India Gate?",
        options: ["Lord Wavell", "Lord Dalhousie", "Edwin Lutyens", "John Nash"],
        answer: "Edwin Lutyens"
    },
    {
        question: "Tree Utsav is celebrated in the state of ____",
        options: ["Arunachal Pradesh", "Kerala", "Assam", "Andhra Pradesh"],
        answer: "Arunachal Pradesh"
    }

];


//let questionIndex = 0;


function displayScienceQuestion(questionIndex) {
    let currentQuestionSet;

    // Choose the question set based on user input
    if (userInput === 'HTML') {
        currentQuestionSet = HTML;
    } else if (userInput === 'CSS') {
        currentQuestionSet = CSS;
    } 
    else if (userInput === 'gk') {
        currentQuestionSet = gk;
    }
    else if (userInput === 'noquiz') {
        game_state = 'Play';
    } 
    else {
        game_state = 'Play';

    }

    if (parseInt(score_val.innerHTML) > 0 && parseInt(score_val.innerHTML) % 3 === 0) {
        const questionObj = currentQuestionSet[questionIndex];

        const userAnswer = prompt(
            `${questionObj.question}\nOptions:\n${questionObj.options.join('\n')}`
        );

        if (userAnswer !== null) {
            if (userAnswer.trim().toLowerCase() === questionObj.answer.toLowerCase()) {
                game_state = 'Play';
                // Continue the game
            } else {
                game_state = 'End';
                message.innerHTML = `Yo you rocked it! 
The correct answer is: ${questionObj.answer}.
Press Enter To Restart`;
                message.classList.add('messageStyle');
                img.style.display = 'none';
                sound_die.play();
            }
        }
    }
}
document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && game_state != 'Play') {
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
});

function updateHighScore() {
    if (parseInt(score_val.innerHTML) > highScore) {
        highScore = parseInt(score_val.innerHTML);
        localStorage.setItem('highScore', highScore);
    }
    document.querySelector('.high_score').innerHTML = 'High Score: ' + highScore;
}

let highScoreDisplay = document.createElement('div');
highScoreDisplay.className = 'high_score';
highScoreDisplay.style.position = 'absolute';
highScoreDisplay.style.top = '10px';
highScoreDisplay.style.left = '50%';
highScoreDisplay.style.transform = 'translateX(-50%)';
highScoreDisplay.style.fontSize = '20px';
highScoreDisplay.style.color = '#ffffff';
highScoreDisplay.style.fontFamily = 'your-font';
document.body.appendChild(highScoreDisplay);
document.querySelector('.high_score').innerHTML = 'High Score: ' + highScore;

function play() {
    //let questionIndex = 0;
    let questionAsked = false;
    updateHighScore();

    function move() {
        if (game_state != 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                if (bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top) {
                    game_state = 'End';
                    message.innerHTML = 'Game Over  '.fontcolor('red') + 'Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    return;
                } else {
                    if (pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1') {
                        score_val.innerHTML = +score_val.innerHTML + 1;
                        sound_point.play();
                        updateHighScore();
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });

        requestAnimationFrame(move);

        if (parseInt(score_val.innerHTML) > 0 && parseInt(score_val.innerHTML) % 3 === 0 && !questionAsked) {
            if (questionIndex < userInput.length) {
                displayScienceQuestion(questionIndex);
                questionIndex++;
            }
            questionAsked = true;
        } else if (parseInt(score_val.innerHTML) % 3 !== 0) {
            questionAsked = false;
        }
    }

    requestAnimationFrame(move);

    let bird_dy = 0;

    function apply_gravity() {
        if (game_state != 'Play') return;
        bird_dy = bird_dy + gravity;

        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/Bird-2.gif';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/Bird.gif';
            }
        });

        if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
            game_state = 'End';
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('messageStyle');
            return;
        }

        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }

    requestAnimationFrame(apply_gravity);

    let pipe_separation = 0;
    let pipe_gap = 45;

    function create_pipe() {
        if (game_state != 'Play') return;

        if (pipe_separation > 115) {
            pipe_separation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            document.body.appendChild(pipe_sprite);
        }
        pipe_separation++;
        requestAnimationFrame(create_pipe);
    }

    requestAnimationFrame(create_pipe);

    function createRock() {
        if (game_state !== 'Play') return;
    
        let rock = document.createElement('div');
        rock.className = 'rock';
        rock.style.top = Math.floor(Math.random() * 70) + 'vh'; // Adjust the height as needed
        rock.style.left = '100vw';
    
        document.body.appendChild(rock);
    
        requestAnimationFrame(moveRocks);
    
        // Call createRock again after a random interval
        setTimeout(() => {
            createRock();
        }, Math.random() * 5000 + 1000); // Adjust the interval as needed
    
        function moveRocks() {
            if (game_state !== 'Play') return;
    
            let rocks = document.querySelectorAll('.rock');
            rocks.forEach((element) => {
                let rockProps = element.getBoundingClientRect();
    
                if (rockProps.right <= 0) {
                    element.remove();
                } else {
                    // Check for collision with the bird
                    if (
                        bird_props.left < rockProps.left + rockProps.width &&
                        bird_props.left + bird_props.width > rockProps.left &&
                        bird_props.top < rockProps.top + rockProps.height &&
                        bird_props.top + bird_props.height > rockProps.top
                    ) {
                        
                        game_state = 'End';
                        message.innerHTML = 'Oh No You Hit a Rock   '.fontcolor('red') + 'Game Over -- Refresh To Restart';
                        message.classList.add('messageStyle');
                        img.style.display = 'none';
                        sound_die.play();
                        return;
                    }
    
                    element.style.left = rockProps.left-4+ 'px';
                }
            });
    
            requestAnimationFrame(moveRocks);
        }
    }
    // Call createRock to start generating rocks
    createRock();
    updateHighScore();
}

play(); // Start the game loop