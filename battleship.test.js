/* eslint-disable no-undef */
import { shipFactory, gameBoardFactory, playerFactory } from "./battleship";

describe("ship object", () => {
  test("get ship length", () => {
    const ship = shipFactory("submarine");
    expect(ship.length).toBe(3);
  });
  test("get hit location", () => {
    const ship = shipFactory("submarine");
    expect(ship.hit(15)).toStrictEqual(15);
  });
  test("check horizontally placed ship is sunk", () => {
    const ship = shipFactory("destroyer");
    ship.hit(1);
    ship.hit(2);
    // const shipCoordinates = [1, 2, 3];
    expect(ship.isSunk("destroyer")).toBe("Sunk");
  });
});

describe("game board", () => {
  test("place cruiser horizontally in gameboard", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("cruiser");
    gameBoard.setShipDirection("horizontal");
    const initialPosition = 1;
    gameBoard.placeShip(ship, initialPosition);
    expect(gameBoard.getShipPosition(ship.id)).toStrictEqual([1, 2, 3]);
  });

  test("place carrier vertically in gameboard", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.setShipDirection("vertical");
    const initialPosition = 11;
    gameBoard.placeShip(ship, initialPosition);
    expect(gameBoard.getShipPosition(ship.id)).toStrictEqual([
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
    const ship = shipFactory("carrier");
    gameBoard.setShipDirection("vertical");
    const initialPosition = 80;
    expect(gameBoard.placeShip(ship, initialPosition)).toBe("Not Valid");
  });
  test("receive attack", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.shipList.push(ship);
    gameBoard.setShipDirection("vertical");
    const initialPosition = 50;
    gameBoard.placeShip(ship, initialPosition);
    expect(gameBoard.receiveAttack(60)).toBe(60);
  });
  test("Receive missed attack", () => {
    const gameBoard = gameBoardFactory();
    const ship = shipFactory("carrier");
    gameBoard.shipList.push(ship);
    gameBoard.setShipDirection("vertical");
    const initialPosition = 50;
    gameBoard.placeShip(ship, initialPosition);
    expect(gameBoard.receiveAttack(51)).toBe("Missed");
  });
  test("Every ship has sunk", () => {
    const gameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    gameBoard.setShipDirection("horizontal");
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

describe("player function", () => {
  test("Create player", () => {
    const player = playerFactory("player");
    expect(player.name).toBe("player");
  });
  test("Attack opposition's gameboard", () => {
    const player = playerFactory("player");
    const oppositionGameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    oppositionGameBoard.setShipDirection("horizontal");
    oppositionGameBoard.placeShip(submarine, 1);
    oppositionGameBoard.shipList.push(submarine);
    expect(player.attack(1, oppositionGameBoard)).toBe(1);
  });
  test("Already attacked position to show error", () => {
    const player = playerFactory("player");
    const oppositionGameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    oppositionGameBoard.setShipDirection("horizontal");
    oppositionGameBoard.placeShip(submarine, 15);
    oppositionGameBoard.shipList.push(submarine);
    player.attack(15, oppositionGameBoard);
    player.attack(16, oppositionGameBoard);
    expect(player.attack(15, oppositionGameBoard)).toBe("Not valid");
  });
});
