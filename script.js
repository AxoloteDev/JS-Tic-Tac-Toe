const gameBoard = document.querySelector("#gameBoard");
let cells = gameBoard.querySelectorAll(".cell");

let isPlayerOneTurn = true;

cells.forEach((cell)=>{
    cell.addEventListener('click', ()=>{
        if(isPlayerOneTurn === true){
            if(cell.innerHTML === ''){
                cell.innerHTML = "X";
            } else{
                return null;
            }

            isPlayerOneTurn = false;
        } else{
            if(cell.innerHTML === ''){
                cell.innerHTML = "O";
            } else{
                return null;
            }

            isPlayerOneTurn = true;
        }
        if (isWin()) {
            alert(isPlayerOneTurn ? "O ganhou!" : "X ganhou!");
        } else if (isBoardFull()) {
            alert("Empate!");
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