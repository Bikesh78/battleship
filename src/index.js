import playerFactory from "./playerFactory";
import shipFactory from "./shipFactory";
import gameBoardFactory from "./gameBoardFactory";
import renderGameBoard from "./renderGameBoard";
import "../src/style.scss";

const playerA = playerFactory("playerA");
const submarine = shipFactory("submarine");
const carrier = shipFactory("carrier");
const battleship = shipFactory("battleship");
const cruiser = shipFactory("cruiser");
const destroyer = shipFactory("destroyer");
const boardOne = document.querySelector(".board-1");
const { playerGameBoard } = playerA;
const { gameBoard } = playerGameBoard;

// place ship in gameboard
playerGameBoard.placeShip(submarine, 0);
playerGameBoard.setShipDirection(carrier, "vertical");
playerGameBoard.placeShip(carrier, 26);
playerGameBoard.placeShip(battleship, 21);
playerGameBoard.placeShip(cruiser, 92);
playerGameBoard.setShipDirection(destroyer, "vertical");
playerGameBoard.placeShip(destroyer, 44);

// Change the code below when allowing user to place ship
playerGameBoard.shipList.push(
  submarine,
  carrier,
  battleship,
  cruiser,
  destroyer
);

renderGameBoard(boardOne, gameBoard);

const pcPlayer = playerFactory("PC");
const boardTwo = document.querySelector(".board-2");
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;
pcPlayer.randomlyPlaceShip();
renderGameBoard(boardTwo, pcGameBoard);

// player turn controller
let turnCount = 0;

if (turnCount === 0) {
  boardTwo.addEventListener("click", (e) => {
    playerA.attack(e.target.id, pcPlayerGameBoard);
    renderGameBoard(boardTwo, pcGameBoard);
    if (!pcPlayerGameBoard.isShipHit()) {
      //if player misses, it's the other player's turn
      turnCount = 1;
      console.log(turnCount);

      // delay rendering of board if pc successfully attacks a ship
      function loopRandomAttack() {
        setTimeout(() => {
          pcPlayer.randomAttack(playerGameBoard);
          renderGameBoard(boardOne, gameBoard);
          if (!playerGameBoard.isShipHit()) {
            console.log("inside second if statement");
            turnCount = 0;
          } else {
            loopRandomAttack();
          }
        }, 800);
      }
      loopRandomAttack();
      /* while (turnCount === 1) {
        pcPlayer.randomAttack(playerGameBoard);
        setTimeout(() => {
          renderGameBoard(boardOne, gameBoard);
        }, 1000);
        console.log("turn", turnCount);
        if (!playerGameBoard.isShipHit()) {
          console.log("inside second if statement");
          turnCount = 0;
        }
      } */
    }
  });
}
