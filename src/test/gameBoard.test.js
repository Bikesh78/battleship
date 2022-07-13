/* eslint-disable no-undef */
import gameBoardFactory from "../gameBoardFactory";
import shipFactory from "../shipFactory";

describe("game board", () => {
  test("Every ship has sunk", () => {
    const gameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    gameBoard.setShipDirection(submarine, "horizontal");
    gameBoard.placeShip(submarine, 1);
    const destroyer = shipFactory("destroyer");
    // gameBoard.placeShip(destroyer, "horizontal");
    gameBoard.placeShip(destroyer, 20);
    gameBoard.shipList.push(submarine);
    gameBoard.shipList.push(destroyer);
    gameBoard.receiveAttack(1);
    gameBoard.receiveAttack(10);
    gameBoard.receiveAttack(2);
    gameBoard.receiveAttack(3);
    gameBoard.receiveAttack(20);
    gameBoard.receiveAttack(21);
    expect(gameBoard.hasEveryShipSunk()).toBe(true);
  });
});
