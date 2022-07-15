import playerFactory from "./playerFactory";
import shipFactory from "./shipFactory";
import gameBoardFactory from "./gameBoardFactory";
import "../src/style.scss";
const renderGameBoard = (parentElement, gameBoard) => {
  //remove already rendered elements
  while (parentElement.firstElementChild) {
    parentElement.firstElementChild.remove();
  }
  gameBoard.forEach((grid, index) => {
    const gridDiv = document.createElement("div");
    if (grid === "Missed") {
      gridDiv.classList.add("missed");
    } else if (grid === "Hit") {
      gridDiv.classList.add("hit");
    } else if (grid !== "") {
      gridDiv.classList.add("occupied");
    }
    gridDiv.classList.add("grid");
    gridDiv.setAttribute("id", index);
    parentElement.appendChild(gridDiv);
  });
  console.log(gameBoard);
};

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

renderGameBoard(boardOne, gameBoard);

const pcPlayer = playerFactory("PC");
const boardTwo = document.querySelector(".board-2");
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;
pcPlayer.randomlyPlaceShip();
renderGameBoard(boardTwo, pcGameBoard);
console.log("pc player:", pcPlayer);

boardTwo.addEventListener("click", (e) => {
  playerA.attack(e.target.id, pcPlayerGameBoard);
  renderGameBoard(boardTwo, pcGameBoard);
});
