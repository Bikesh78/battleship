/* eslint-disable no-undef */
import gameBoardFactory from "../gameBoardFactory";
import shipFactory from "../shipFactory";

describe("game board", () => {
  test("place cruiser horizontally in gameboard", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("cruiser");
    gameBoard.setShipDirection(ship, "horizontal");
    const initialPosition = 1;
    gameBoard.placeShip(ship, initialPosition);
    expect(gameBoard.getShipPosition(ship.id)).toStrictEqual([1, 2, 3]);
  });

  test("place carrier vertically in gameboard", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.setShipDirection(ship, "vertical");
    const initialPosition = 11;
    gameBoard.placeShip(ship, initialPosition);
    expect(gameBoard.getShipPosition(ship.id)).toStrictEqual([
      11, 21, 31, 41, 51,
    ]);
  });
  test("place ship out of boundary", () => {
    const gameBoard = gameBoardFactory();
    const carrier = shipFactory("carrier");
    gameBoard.setShipDirection(carrier, "horizontal");
    const initialPosition = 7;
    expect(gameBoard.placeShip(carrier, initialPosition)).toBe("Not Valid");
  });
  test("place ship out of boundary", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.setShipDirection(ship, "vertical");
    const initialPosition = 80;
    expect(gameBoard.placeShip(ship, initialPosition)).toBe("Not Valid");
  });
  test("receive attack", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.shipList.push(ship);
    gameBoard.setShipDirection(ship, "vertical");
    const initialPosition = 50;
    gameBoard.placeShip(ship, initialPosition);
    gameBoard.receiveAttack(60);
    expect(gameBoard.isShipHit()).toBe(true);
  });
  test("Receive missed attack", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.shipList.push(ship);
    gameBoard.setShipDirection(ship, "vertical");
    const initialPosition = 50;
    gameBoard.placeShip(ship, initialPosition);
    gameBoard.receiveAttack(51);
    expect(gameBoard.isShipHit()).toBe(false);
  });
  test("Every ship has sunk", () => {
    const gameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    gameBoard.setShipDirection(submarine, "horizontal");
    gameBoard.placeShip(submarine, 1);
    const destroyer = shipFactory("destroyer");
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
