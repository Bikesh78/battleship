import playerFactory from "./playerFactory";
import shipFactory from "./shipFactory";
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

const pcPlayer = playerFactory("PC Player");
const boardTwo = document.querySelector(".board-2");
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;

const winnerMessage = document.querySelector(".winner-message");
const winnerMessageText = winnerMessage.querySelector(".winner-message-text");
let dragCount = 0;
let draggedShip = null;

playerGameBoard.shipList.push(
  submarine,
  carrier,
  battleship,
  cruiser,
  destroyer
);

function isGameOver(oppositionGameBoard, player) {
  if (oppositionGameBoard.hasEveryShipSunk()) {
    // console.log(player);
    winnerMessage.style.visibility = "visible";
    if (player.name === "player A")
      winnerMessageText.textContent = `You Won The Game.`;
  } else if (player.name === "PC Player") {
    winnerMessageText.textContent = `The Compute Won The Game.`;
  }
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
      boardOne.classList.add("disabled");

      //if player misses, it's the other player's turn
      if (isTurnOver() && !pcPlayerGameBoard.isShipHit()) {
        turnCount = 1;
        boardOne.classList.remove("disabled");

        loopRandomAttack();
      }
    });
  }
}

renderGameBoard(boardOne, gameBoard);

pcPlayer.randomlyPlaceShip();
renderGameBoard(boardTwo, pcGameBoard, true);

if (!hasGameStarted) {
  const initialMessage = document.querySelector(".initial-message");
  const board = initialMessage.querySelector(".board");
  const ships = initialMessage.querySelectorAll(".ship");
  body.classList.add("place-ship");

  renderGameBoard(board, gameBoard);

  ships.forEach((ship) => {
    ship.addEventListener("click", (e) => {
      e.stopPropagation();
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

  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
    if (dragCount === 0) {
      draggedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id === e.fromElement.className
      );
      console.log("enter", e.fromElement.className);
      dragCount++;
    }
  });
  document.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log("drag end", e);
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    // console.log("drop", e);
    dragCount = 0;
    if (e.target.className.includes("grid")) {
      let ships = initialMessage.querySelector(".ships");
      let shipToBeRemoved = initialMessage.querySelector(
        `.${draggedShip[0].id}`
      );
      playerGameBoard.placeShip(draggedShip[0], Number(e.target.id));
      // console.log(draggedShip);
      shipToBeRemoved.parentElement.remove();
      renderGameBoard(board, gameBoard);
      if (!ships.firstElementChild) {
        body.classList.remove("place-ship");
        hasGameStarted = true;
        startGame();
      }
    }
  });
}
