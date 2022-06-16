/* eslint-disable no-undef */
import { shipFactory, gameBoardFactory } from "./battleship";

test("get ship length", () => {
  const ship = shipFactory("submarine");
  expect(ship.length).toBe(3);
});
test("get hit location", () => {
  const ship = shipFactory("submarine");

  expect(ship.hit([1, 1])).toStrictEqual([1, 1]);
});
test("check horizontally placed ship is sunk", () => {
  const ship = shipFactory("submarine");
  ship.hit([1, 1]);
  ship.hit([1, 2]);
  ship.hit([1, 3]);
  const shipCoordinates = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  expect(ship.isSunk(shipCoordinates)).toBe("Sunk");
});

test("place submarine horizontally in gameboard", () => {
  const gameBoard = gameBoardFactory();
  //   const ship = shipFactory("submarine");
  gameBoard.setShipDirection("horizontal");
  const initialPosition = [1, 1];
  expect(gameBoard.placeShip("submarine", initialPosition)).toStrictEqual([
    [1, 1],
    [1, 2],
    [1, 3],
  ]);
});

// test("place carrier in ga");
