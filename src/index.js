import playerFactory from "./playerFactory";
import shipFactory from "./shipFactory";
import gameBoardFactory from "./gameBoardFactory";
import renderGameBoard from "./renderGameBoard";
import "../src/style.scss";

let hasGameStarted = false;
const body = document.querySelector("body");

const playerA = playerFactory("player A");
const submarine = shipFactory("submarine");
const carrier = shipFactory("carrier");
const battleship = shipFactory("battleship");
const cruiser = shipFactory("cruiser");
const destroyer = shipFactory("destroyer");
const boardOne = document.querySelector(".board-1");
const { playerGameBoard } = playerA;
const { gameBoard } = playerGameBoard;
// place ship in gameboard
/* playerGameBoard.placeShip(submarine, 0);
playerGameBoard.setShipDirection(carrier, "vertical");
playerGameBoard.placeShip(carrier, 26);
playerGameBoard.placeShip(battleship, 21);
playerGameBoard.placeShip(cruiser, 92);
playerGameBoard.setShipDirection(destroyer, "vertical");
playerGameBoard.placeShip(destroyer, 44);
 */
// Change the code below when allowing user to place ship
playerGameBoard.shipList.push(
  submarine,
  carrier,
  battleship,
  cruiser,
  destroyer
);

renderGameBoard(boardOne, gameBoard);

const pcPlayer = playerFactory("PC Player");
const boardTwo = document.querySelector(".board-2");
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;
pcPlayer.randomlyPlaceShip();
renderGameBoard(boardTwo, pcGameBoard, true);

const winnerMessage = document.querySelector(".winner-message");
const winnerMessageText = winnerMessage.querySelector(".winner-message-text");
const playAgainButton = winnerMessage.querySelector("button");
function isGameOver(oppositionGameBoard, player) {
  // if playerGameBoard.everyShipHasSunk()
  if (oppositionGameBoard.hasEveryShipSunk()) {
    console.log(player);
    winnerMessageText.textContent = `${player.name} has won the game.`;
    winnerMessage.style.display = "block";
  }
}

if (!hasGameStarted) {
  const initialMessage = document.querySelector(".initial-message");
  const board = initialMessage.querySelector(".board");
  const rotateBtn = initialMessage.querySelector(".rotate");
  body.classList.add("modal-opened");
  // renderInitialMessage(board, gameBoard);
  renderGameBoard(board, gameBoard);
  const grids = initialMessage.querySelectorAll(".sub-grid");
  /*  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
      console.log(e);
      grid.style.width = `150px`;
    });
    grid.addEventListener("mouseleave", (e) => {
      grid.style.width = `0`;
    });
  });
 */
  /*   board.addEventListener("mouseover", (e) => {
    console.log(e.target.id);
    e.target.querySelector(".sub-grid").style.width = `150px`;
  });
  board.addEventListener("mouseout", (e) => {
    e.target.querySelector(".sub-grid").style.width = `0`;
  }); */

  // const battleshipDraggable = initialMessage.querySelector(".battleship");

  const ships = initialMessage.querySelectorAll(".ship");
  ships.forEach((ship) => {
    ship.addEventListener("click", (e) => {
      ship.classList.toggle("vertical");
      let rotatedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id == e.target.className
      );
      if (ship.className === "vertical") {
        playerGameBoard.setShipDirection(rotatedShip[0], "horizontal");
      } else {
        playerGameBoard.setShipDirection(rotatedShip[0], "vertical");
        console.log(rotatedShip);
      }
    });
  });

  let dragCount = 0;
  let draggedShip = null;
  board.addEventListener("dragenter", (e) => {
    e.preventDefault();
    if (dragCount === 0) {
      draggedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id === e.fromElement.className
      );
      console.log("enter", e.fromElement.className);
      dragCount++;
    }
  });
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log("drag end", e);
  });
  board.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop", e);
    dragCount = 0;
    playerGameBoard.placeShip(draggedShip[0], Number(e.target.id));
    console.log(draggedShip);
    // draggedShip = null;
    let ships = initialMessage.querySelector(".ships");
    let shipToBeRemoved = initialMessage.querySelector(`.${draggedShip[0].id}`);
    shipToBeRemoved.parentElement.remove();
    renderGameBoard(board, gameBoard);
    if (!ships.firstElementChild) {
      body.classList.remove("modal-opened");
      hasGameStarted = true;
      startGame();
    }
  });
  let i = 0;
  /* rotateBtn.addEventListener("click", (e) => {
    console.log(e.target);
    playerGameBoard.setShipDirection(playerGameBoard.shipList[i], "vertical");
  }); */
  /* board.addEventListener("dragenter", (e) => {
    e.preventDefault();
    console.log(e);
    e.dataTransfer.dropEffect = "move";
  });
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("drag end", e);
  });
  board.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop", e);
    playerGameBoard.placeShip(playerGameBoard.shipList[i], Number(e.target.id));
    renderGameBoard(board, gameBoard);
    if (playerGameBoard.isValidPosition()) {
      i++;
    }
    if (i === playerGameBoard.shipList.length) {
      body.classList.remove("modal-opened");
      hasGameStarted = true;
      startGame();
      return;
    }
  }); */
  /* board.addEventListener("click", (e) => {
    console.log("board clicked", e.target.id);
    playerGameBoard.placeShip(playerGameBoard.shipList[i], Number(e.target.id));
    renderGameBoard(board, gameBoard);
    if (playerGameBoard.isValidPosition()) {
      i++;
    }
    if (i === playerGameBoard.shipList.length) {
      body.classList.remove("modal-opened");
      hasGameStarted = true;
      startGame();
      return;
    }
  }); */
}

function startGame() {
  renderGameBoard(boardOne, gameBoard);

  // player turn controller
  let turnCount = 0;

  // delay rendering of board if pc successfully attacks a ship
  function loopRandomAttack() {
    boardOne.classList.remove("disabled");
    boardTwo.classList.add("disabled");
    setTimeout(() => {
      pcPlayer.randomAttack(playerGameBoard);
      renderGameBoard(boardOne, gameBoard);
      isGameOver(playerGameBoard, pcPlayer);
      if (!playerGameBoard.isShipHit()) {
        console.log("inside second if statement");
        turnCount = 0;
        boardTwo.classList.remove("disabled");
        boardOne.classList.add("disabled");
      } else {
        loopRandomAttack();
      }
    }, 800);
  }

  if (turnCount === 0) {
    boardTwo.addEventListener("click", (e) => {
      let { isTurnOver } = playerA;
      playerA.attack(e.target.id, pcPlayerGameBoard);
      renderGameBoard(boardTwo, pcGameBoard, true);
      isGameOver(pcPlayerGameBoard, playerA);
      console.log(pcPlayerGameBoard.hasEveryShipSunk());
      boardOne.classList.add("disabled");
      if (isTurnOver() && !pcPlayerGameBoard.isShipHit()) {
        //if player misses, it's the other player's turn
        turnCount = 1;
        console.log(turnCount);
        boardOne.classList.remove("disabled");

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
}
