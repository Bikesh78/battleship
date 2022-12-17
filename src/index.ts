import playerFactory, { gameBoard, ships } from "./playerFactory";
import shipFactory from "./shipFactory";
import renderGameBoard from "./renderGameBoard";
import "../src/style.scss";

interface player {
  name: string;
  playerGameBoard: gameBoard;
  attack: (
    position: number,
    gameBoard: gameBoard
  ) => "Not valid" | "Missed" | number;
  randomAttack: (gameBoard: gameBoard) => "Missed" | number;
  randomlyPlaceShip: () => void;
  isTurnOver: () => boolean;
}
let hasGameStarted = false;
const body = document.querySelector("body") as HTMLElement;

const playerA = playerFactory("player A");
const submarine = shipFactory("submarine");
const carrier = shipFactory("carrier");
const battleship = shipFactory("battleship");
const cruiser = shipFactory("cruiser");
const destroyer = shipFactory("destroyer");
const boardOne = document.querySelector(".board-1") as HTMLElement;
const { playerGameBoard } = playerA;
const { gameBoard } = playerGameBoard;

const pcPlayer = playerFactory("PC Player");
const boardTwo = document.querySelector(".board-2") as HTMLElement;
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;

const winnerMessage = document.querySelector(".winner-message") as HTMLElement;
const winnerMessageText = winnerMessage?.querySelector(
  ".winner-message-text"
) as HTMLElement;
const playAgainBtn = winnerMessage.querySelector(".btn-main");
const turnInfo = document.querySelector(".turn-info") as HTMLElement;
let dragCount = 0;

playerGameBoard.shipList.push(
  submarine,
  carrier,
  battleship,
  cruiser,
  destroyer
);
function isGameOver(oppositionGameBoard: gameBoard, player: player) {
  if (oppositionGameBoard.hasEveryShipSunk()) {
    winnerMessage.style.cssText = "opacity:1;visibility:visible";
    playAgainBtn?.addEventListener("click", () => window.location.reload());
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
    boardTwo.addEventListener("click", (e:Event ) => {
      let { isTurnOver } = playerA;
      playerA.attack(Number((e.target as HTMLDivElement).id), pcPlayerGameBoard);
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
  const initialMessage = document.querySelector(".initial-message") as HTMLElement;
  const board = initialMessage.querySelector(".board") as HTMLElement;
  const ships = initialMessage.querySelectorAll(".ship");
  const randomButton = initialMessage.querySelector(".btn-secondary") as HTMLInputElement;
  const instructionBtn = document.querySelector(".instruction-button") as HTMLInputElement;
  const overlay = initialMessage.querySelector(".overlay") as HTMLElement;
  const closeIcon = initialMessage.querySelector(".close-icon") as HTMLElement;
  const draggableShipList = document.querySelectorAll(".ship");
  let draggedShip:Array<ships> | null = null;
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
    ship.addEventListener("click", (e:Event) => {
      e.stopPropagation();
      ship.classList.toggle("vertical");
      let rotatedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id == (e.target as HTMLElement).className
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
        (ship) => ship.id === (e.target as HTMLElement).className
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
    if ((e.target as HTMLElement).className.includes("grid")) {
      let ships = initialMessage.querySelector(".ships");
      let shipToBeRemoved = initialMessage.querySelector(
        `.${draggedShip && draggedShip[0].id}`
      );
      if(draggedShip){
        playerGameBoard.placeShip(draggedShip[0], Number((e.target as HTMLElement).id));
      }
      if (playerGameBoard.isValidPosition()) {
        shipToBeRemoved?.parentElement?.remove();
      }
      draggedShip = null;
      renderGameBoard(board, gameBoard);
      if (!ships?.firstElementChild) {
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
