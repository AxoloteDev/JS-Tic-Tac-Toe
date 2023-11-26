const body = document.querySelector('body');
const turn = document.querySelector('#player-turn');
const winScreen = document.querySelector('#win-screen');
const playerWin = document.querySelector('#player-win');
const gameBoard = document.querySelector("#gameBoard");
let cells = gameBoard.querySelectorAll(".cell");

let isPlayerOneTurn = true;
turn.innerHTML = 'Player 1 Turn';
body.style.backgroundColor = "#483d8b";

cells.forEach((cell)=>{
    cell.addEventListener('click', ()=>{
        if(isPlayerOneTurn === true){
            if(cell.innerHTML === ''){
                cell.innerHTML = "X";
                body.style.backgroundColor = "#940c27";
                turn.innerHTML = 'Player 2 Turn';
            } else{
                return null;
            }
            isPlayerOneTurn = false;
        } else{
            if(cell.innerHTML === ''){
                cell.innerHTML = "O";
                body.style.backgroundColor = "#483d8b";
            } else{
                return null;
            }
            isPlayerOneTurn = true;
            turn.innerHTML = 'Player 1 Turn';
        }
        
        if (isWin()) {
            winScreen.style.display = 'flex';
            isPlayerOneTurn ? winScreen.style.backgroundColor = '#df1c43'
             : winScreen.style.backgroundColor = '#5b44f1';

            isPlayerOneTurn ? playerWin.innerHTML = "Player 2 Win" : playerWin.innerHTML = "Player 1 win"; 

            isPlayerOneTurn ?  body.style.backgroundColor = "#940c27" :  body.style.backgroundColor = "#483d8b";
        } else if (isBoardFull()) {
            alert('Empate!');
        }
    });
});

function isWin(){
    return (
        checkLine(0, 1, 2) ||
        checkLine(3, 4, 5) ||
        checkLine(6, 7, 8) ||
        checkLine(0, 3, 6) ||
        checkLine(1, 4, 7) ||
        checkLine(2, 5, 8) ||
        checkLine(0, 4, 8) ||
        checkLine(2, 4, 6)
    );
}

function checkLine(a, b, c) {
    return (
        cells[a].innerHTML !== '' &&
        cells[a].innerHTML === cells[b].innerHTML &&
        cells[a].innerHTML === cells[c].innerHTML
    );
}

function isBoardFull(){
    for(let i = 0; i < cells.length; i++){
        if(cells[i].innerHTML === ''){
            return false;
        }
    }
    return true;
}