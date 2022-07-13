import playerFactory from "./playerFactory";
import shipFactory from "./shipFactory";
import gameBoardFactory from "./gameBoardFactory";
import "../src/style.scss";
const renderGameBoard = (parentElement, gameBoard) => {
  gameBoard.forEach((grid, index) => {
    const gridDiv = document.createElement("div");
    if (grid !== "") {
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

console.log(playerA);
