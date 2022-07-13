/* eslint-disable no-undef */
import gameBoardFactory from "../gameBoardFactory";
import playerFactory from "../playerFactory";
import shipFactory from "../shipFactory";

describe("player function", () => {
  test("Create player", () => {
    const player = playerFactory("player");
    expect(player.name).toBe("player");
  });
  test("Attack opposition's gameboard", () => {
    const player = playerFactory("player");
    const oppositionGameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    oppositionGameBoard.setShipDirection(submarine, "horizontal");
    oppositionGameBoard.placeShip(submarine, 1);
    oppositionGameBoard.shipList.push(submarine);
    expect(player.attack(1, oppositionGameBoard)).toBe(1);
  });
  test("Already attacked position to show error", () => {
    const player = playerFactory("player");
    const oppositionGameBoard = gameBoardFactory();
    const submarine = shipFactory("submarine");
    oppositionGameBoard.setShipDirection(submarine, "horizontal");
    oppositionGameBoard.placeShip(submarine, 15);
    oppositionGameBoard.shipList.push(submarine);
    player.attack(15, oppositionGameBoard);
    player.attack(16, oppositionGameBoard);
    // for (let i = 0; i < 50; i++) {
    //   player.randomAttack(oppositionGameBoard);
    // }
    expect(player.attack(15, oppositionGameBoard)).toBe("Not valid");
    // expect(oppositionGameBoard.hasEveryShipSunk()).toBe(true);
  });
});
