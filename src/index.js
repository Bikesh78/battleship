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
const playAgainBtn = winnerMessage.querySelector(".btn-main");
const turnInfo = document.querySelector(".turn-info");
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
    winnerMessage.style.cssText = "opacity:1;visibility:visible";
    playAgainBtn.addEventListener("click", () => window.location.reload());
    if (player.name === "player A")
      winnerMessageText.textContent = `You Won The Game.`;
  } else if (player.name === "PC Player") {
    winnerMessageText.textContent = `The Compute Won The Game.`;
  }
}
function startGame() {
  renderGameBoard(boardOne, gameBoard);
  turnInfo.textContent = "Your Turn";

  // player turn controller
  let turnCount = 0;

  // delay rendering of board if pc successfully attacks a ship
  function loopRandomAttack() {
    boardOne.classList.remove("disabled");
    boardTwo.classList.add("disabled");
    turnInfo.textContent = "Computer's Turn";
    setTimeout(() => {
      pcPlayer.randomAttack(playerGameBoard);
      renderGameBoard(boardOne, gameBoard);
      isGameOver(playerGameBoard, pcPlayer);
      if (!playerGameBoard.isShipHit()) {
        turnCount = 0;
        turnInfo.textContent = "Your Turn";
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
  const randomButton = initialMessage.querySelector(".btn-secondary");
  const instructionBtn = document.querySelector(".instruction-button");
  const overlay = initialMessage.querySelector(".overlay");
  const closeIcon = initialMessage.querySelector(".close-icon");
  const draggableShipList = document.querySelectorAll(".ship");
  let draggedShip = null;
  body.classList.add("place-ship");

  renderGameBoard(board, gameBoard);

  randomButton.addEventListener("click", () => {
    playerGameBoard.shipList = [];
    playerA.randomlyPlaceShip();
    body.classList.remove("place-ship");
    hasGameStarted = true;
    startGame();
  });
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
      }
    });
  });

  draggableShipList.forEach((ship) => {
    ship.addEventListener("mousedown", (e) => {
      draggedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id === e.target.className
      );
    });
  });

  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });
  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    dragCount = 0;
    if (e.target.className.includes("grid")) {
      let ships = initialMessage.querySelector(".ships");
      let shipToBeRemoved = initialMessage.querySelector(
        `.${draggedShip[0].id}`
      );
      playerGameBoard.placeShip(draggedShip[0], Number(e.target.id));
      if (playerGameBoard.isValidPosition()) {
        shipToBeRemoved.parentElement.remove();
      }
      draggedShip = null;
      renderGameBoard(board, gameBoard);
      if (!ships.firstElementChild) {
        body.classList.remove("place-ship");
        hasGameStarted = true;
        startGame();
      }
    }
  });
  instructionBtn.addEventListener("click", () =>
    initialMessage.classList.add("show-instructions")
  );
  overlay.addEventListener("click", () =>
    initialMessage.classList.remove("show-instructions")
  );
  closeIcon.addEventListener("click", () => {
    initialMessage.classList.remove("show-instructions");
  });
}
