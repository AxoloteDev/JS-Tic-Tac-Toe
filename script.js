const gameBoard = document.querySelector('#gameBoard');
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
    });
});
