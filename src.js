'use strict';

//selecionamos los nodos

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

gameLevelDisplay.style.cssText = `
            display: flex;
            justify-content: center;
            align-item: center;
            font-weight: 900;
            margin: auto;
            padding: auto;
            text-align: center;
            font-size: 8vmin;

`;

//función que genera colores aleatorios
function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

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
    let index = 0;
    for (let y = 0; y < rows; y++) {
        const tr = document.createElement('tr');

        for (let x = 0; x < columns; x++) {
            const td = document.createElement('td');

            td.style.width = '8vmin';
            td.style.height = '8vmin';

            if (target_x === x && target_y === y) {
                td.style.background = targetColor.innerHTML;
            } else {
                index;
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
                startButton.style.background = '#191919';
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
}
function winModal() {
    modal.style.display = 'inline-block';
    startButton.textContent = `Start level ${level}`;
    gameLevelDisplay.textContent = 'You win!!!';
    gameLevelDisplay.style.color = getRandomColor();
    startButton.style.backgroundColor = getRandomColor();
}

function loseModal() {
    modal.style.display = 'inline-block';
    startButton.textContent = `Return to level ${level}`;
    gameLevelDisplay.textContent = 'You lose!!!';
    gameLevelDisplay.style.color = '#ff0000';
    startButton.style.backgroundColor = '#ff0000';

    lives = 5;
    score = 0;
}

function finishGame() {
    modal.style.display = 'block';
    startButton.textContent = `Start again at level: ${level}`;
    gameLevelDisplay.textContent = 'You win and ended the game!!!';
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

    tryGuess();
}

presentation();

startButton.addEventListener('click', () => {
    modal.style.display = 'none';
    startGame();
});
