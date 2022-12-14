import gameBoardFactory from "./gameBoardFactory";
import shipFactory from "./shipFactory";

type shipDirection = "horizontal" | "vertical";
export interface ships {
  id: string;
  length: number;
  hit: (position: number) => number;
  isSunk: () => boolean;
  shipDirection: shipDirection;
}
export interface gameBoard {
  gameBoard: Array<number> | Array<string>;
  shipList: Array<ships>;
  hitCoordinates: Array<number>;
  setShipDirection: (
    ship: ships,
    direction: shipDirection
  ) => shipDirection;
  placeShip: (
    ship: ships,
    initialPosition: number
  ) => number[] | string[] | "Not Valid";
  getShipPosition: (id: number) => number[];
  receiveAttack: (coordinate: number) => "Missed" | number;
  hasEveryShipSunk: () => boolean;
  isShipHit: () => boolean;
  isValidPosition: () => boolean;
}

export default function playerFactory(name: string) {
  const playerGameBoard = gameBoardFactory();
  const isAlreadyShot = (position: number, oppositionGameBoard: gameBoard) => {
    if (oppositionGameBoard.hitCoordinates.includes(position)) {
      return true;
    } else return false;
  };
  let isAttackValid = true;
  const isTurnOver = () => {
    return isAttackValid;
  };
  const attack = (position: number, oppositionGameBoard: gameBoard) => {
    if (isAlreadyShot(position, oppositionGameBoard)) {
      isAttackValid = false;
      return "Not valid";
    } else {
      isAttackValid = true;
      oppositionGameBoard.hitCoordinates.push(position);
      return oppositionGameBoard.receiveAttack(position);
    }
  };
  const randomAttack = (oppositionGameBoard: gameBoard) => {
    let randomPosition = Math.floor(Math.random() * 100);
    while (isAlreadyShot(randomPosition, oppositionGameBoard)) {
      randomPosition = Math.floor(Math.random() * 100);
    }
    oppositionGameBoard.hitCoordinates.push(randomPosition);
    return oppositionGameBoard.receiveAttack(randomPosition);
  };
  const randomlyPlaceShip = () => {
    // instantiate ships
    const submarine: ships = shipFactory("submarine");
    const carrier: ships = shipFactory("carrier");
    const battleship: ships = shipFactory("battleship");
    const cruiser: ships = shipFactory("cruiser");
    const destroyer: ships = shipFactory("destroyer");

    playerGameBoard.shipList.push(
      submarine as never,
      carrier as never,
      battleship as never,
      cruiser as never,
      destroyer as never
    );

    // loop through each ship and place them in the board
    playerGameBoard.shipList.forEach((ship) => {
      let shipInitialPosition = Math.floor(Math.random() * 100);
      const randomNumber = Math.floor(Math.random() * 2);
      const shipDirection = randomNumber === 0 ? "horizontal" : "vertical";
      playerGameBoard.setShipDirection(ship, shipDirection);
      let i = 0;
      while (i < 1) {
        if (
          playerGameBoard.placeShip(ship, shipInitialPosition) === "Not Valid"
        ) {
          shipInitialPosition = Math.floor(Math.random() * 99);
          if (
            playerGameBoard.placeShip(ship, shipInitialPosition) !== "Not Valid"
          ) {
            break;
          }
        } else {
          i++;
        }
      }
    });
  };
  return {
    name,
    playerGameBoard,
    attack,
    randomAttack,
    randomlyPlaceShip,
    isTurnOver,
  };
}
