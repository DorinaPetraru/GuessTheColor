'use strict';

//selecionamos los nodos
<<<<<<< HEAD
<<<<<<< HEAD

=======
const body = document.querySelector('body');
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
const body = document.querySelector('body');
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
const table = document.querySelector('#table');
const targetColor = document.querySelector('#targetColor');
const startButton = document.querySelector('#startButton');
const gameLevelDisplay = document.querySelector('#gameLevel');
let modal = document.querySelector('#myModal');
let scoreSpan = document.querySelector('#scoreSpan');
let livesSpan = document.querySelector('#livesSpan');

let score = 0;
let lives = 10;
let level = 1;

const textGradient = document.querySelector('p.textGradient');
textGradient.textContent = 'Adivina el color';

//estilos css con js
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
startButton.style.cssText = `
            border-radius: 10px;
            color: var(--whiteShadoww);
            font-size: 1.5rem;
            width: 90%;
            margin: auto;
            padding: auto;
            text-align: center;
          
     `;
<<<<<<< HEAD
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813

gameLevelDisplay.style.cssText = `
            display: flex;
            justify-content: center;
            align-item: center;
            font-weight: 900;
            margin: auto;
            padding: auto;
            text-align: center;
            font-size: 8vmin;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
`;

//función que genera colores aleatorios
function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
// Seleccionamos el body.
//const body = document.body;

// Fragmento de código que se repite cada dos segundos.
setInterval(() => {
    // Modificamos el color del body.
    body.style.backgroundColor = getRandomColor();
}, 2000);

<<<<<<< HEAD
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
//función crear niveles
function createBoard(level) {
    if (level === 1) {
        createTable(5, 5);
    } else if (level === 2) {
        createTable(7, 7);
    } else if (level === 3) {
        createTable(9, 9);
    }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
function levelBackground() {
    let levelOne = './videos/Balls - 104438.mp4';
    let levelTwo = './videos/Abstract - 14668.mp4';
    let video = document.querySelector('body > video');
    let source = document.createElement('source');
    if (video.hasChildNodes()) {
        video.removeChild(video.firstChild);
    }

    if (level === 1) {
        //removeAttribute(levelThree);
        source.setAttribute('src', levelOne);
    } else if (level === 2) {
        //source.removeAttribute(levelOne);
        source.setAttribute('src', levelTwo);
    } else if (level === 3) {
        // Modificamos el color del body.
        body.style.backgroundColor = getRandomColor();
    }
    //body.append(video);
    video.append(source);
    video.load();
    video.play();
    console.log(video);
}

<<<<<<< HEAD
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
//función capturar color
function colorPicker(element) {
    let result;
    result = element.style.background;
    return result;
}

//función crear tabla
function createTable(rows, columns) {
    let target_x = Math.floor(Math.random() * columns);
    let target_y = Math.floor(Math.random() * rows);
<<<<<<< HEAD
<<<<<<< HEAD
    let index = 0;
=======

>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======

>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
    for (let y = 0; y < rows; y++) {
        const tr = document.createElement('tr');

        for (let x = 0; x < columns; x++) {
            const td = document.createElement('td');

<<<<<<< HEAD
<<<<<<< HEAD
            td.style.width = '8vmin';
            td.style.height = '8vmin';
=======
            td.style.width = '50px';
            td.style.height = '50px';
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
            td.style.width = '50px';
            td.style.height = '50px';
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813

            if (target_x === x && target_y === y) {
                td.style.background = targetColor.innerHTML;
            } else {
<<<<<<< HEAD
<<<<<<< HEAD
                index;
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
                td.style.background = getRandomColor();
            }

            tr.append(td);
        }
        table.append(tr);
    }
}

function handleClick(e) {
    if (e.target.matches('td')) {
        const td = e.target;
        game(td);
    }
}

// reiniciamos la table
function tryGuess() {
    table.innerHTML = '';
    targetColor.innerHTML = getRandomColor();
    targetColor.style.color = targetColor.innerHTML;
    createBoard(level);
    table.addEventListener('click', handleClick);
}

function updateScoreSpan(value) {
    scoreSpan.innerHTML = value;
}

function updateLivesSpan(value) {
    livesSpan.innerHTML = value;
}

function game(td) {
    if (targetColor.innerHTML === colorPicker(td)) {
        score++;
        updateScoreSpan(score);
        tryGuess();
        if (score === 3 && level < 3) {
            updateScoreSpan(score);
            if (level < 3) {
                level++;
<<<<<<< HEAD
<<<<<<< HEAD
                startButton.style.background = '#191919';
=======
                /* startButton.style.background = '#191919';*/
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
                /* startButton.style.background = '#191919';*/
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
            }
            winModal();
        } else if (score === 3 && level === 3) {
            updateScoreSpan(score);
            level = 1;
            finishGame();
        }
    } else {
        if (lives - 1 > 0) {
            lives--;
            updateLivesSpan(lives);
        } else if (lives - 1 === 0) {
            lives--;
            updateLivesSpan(lives);
            level = 1;
            loseModal();
        }
    }
    console.log(`score: ${score}; lives: ${lives}`);
}

function presentation() {
    modal.style.display = 'block';
<<<<<<< HEAD
<<<<<<< HEAD
=======
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
}
function winModal() {
    modal.style.display = 'inline-block';
    startButton.textContent = `Start level ${level}`;
    gameLevelDisplay.textContent = 'You win!!!';
    gameLevelDisplay.style.color = getRandomColor();
<<<<<<< HEAD
<<<<<<< HEAD
    startButton.style.backgroundColor = getRandomColor();
=======
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
}

function loseModal() {
    modal.style.display = 'inline-block';
    startButton.textContent = `Return to level ${level}`;
    gameLevelDisplay.textContent = 'You lose!!!';
<<<<<<< HEAD
<<<<<<< HEAD
    gameLevelDisplay.style.color = '#ff0000';
    startButton.style.backgroundColor = '#ff0000';
=======
    gameLevelDisplay.style.color = '#191919';
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
    gameLevelDisplay.style.color = '#191919';
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813

    lives = 5;
    score = 0;
}

function finishGame() {
    modal.style.display = 'block';
    startButton.textContent = `Start again at level: ${level}`;
    gameLevelDisplay.textContent = 'You win and ended the game!!!';
<<<<<<< HEAD
<<<<<<< HEAD
=======
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
    levelBackground();
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
}

function startGame() {
    //Establecer puntuación inicial
    modal.style.display = 'none';

    //Actualizar texto puntuación
    score = 0;
    scoreSpan.textContent = score;

    //Establecer las vidas iniciales

    lives = 5;

    //Actualizar texto vidas

    livesSpan.textContent = lives;

    //Generar tabla y colorTarget
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
=======
>>>>>>> d2f235a1cdc7dcb466b10267d15b782115fc0813
    tryGuess();
}

presentation();

startButton.addEventListener('click', () => {
    modal.style.display = 'none';
    startGame();
});
