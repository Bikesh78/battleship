/* eslint-disable no-undef */
import { shipFactory, gameBoardFactory } from "./battleship";

test("get ship length", () => {
  const ship = shipFactory("submarine");
  expect(ship.length).toBe(3);
});
test("get hit location", () => {
  const ship = shipFactory("submarine");
  expect(ship.hit(15)).toStrictEqual([15]);
});
test("check horizontally placed ship is sunk", () => {
  const ship = shipFactory("submarine");
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  const shipCoordinates = [1, 2, 3];
  expect(ship.isSunk(shipCoordinates)).toBe("Sunk");
});

test("place submarine horizontally in gameboard", () => {
  const gameBoard = gameBoardFactory();
  const ship = shipFactory("cruiser");
  gameBoard.setShipDirection("horizontal");
  const initialPosition = 1;
  gameBoard.placeShip("cruiser", initialPosition);
  expect(gameBoard.getShipPosition("cruiser")).toStrictEqual([1, 2, 3]);
});

test("place carrier vertically in gameboard", () => {
  const gameBoard = gameBoardFactory();
  const ship = shipFactory("carrier");
  gameBoard.setShipDirection("vertical");
  const initialPosition = 11;
  gameBoard.placeShip("carrier", initialPosition);
  expect(gameBoard.getShipPosition("carrier")).toStrictEqual([
    11, 21, 31, 41, 51,
  ]);
});
test("place ship out of boundary", () => {
  const gameBoard = gameBoardFactory();
  gameBoard.setShipDirection("horizontal");
  const initialPosition = 7;
  expect(gameBoard.placeShip("carrier", initialPosition)).toBe("Not Valid");
});
test("place ship out of boundary", () => {
  const gameBoard = gameBoardFactory();
  gameBoard.setShipDirection("vertical");
  const initialPosition = 80;
  expect(gameBoard.placeShip("carrier", initialPosition)).toBe("Not Valid");
});
test.skip("receive attack", () => {
  const gameBoard = gameBoardFactory();
  gameBoard.setShipDirection("vertical");
  const initialPosition = [2, 2];
  gameBoard.placeShip("carrier", initialPosition);
  expect(gameBoard.receiveAttack([2, 5])).toBe("Hit");
});
