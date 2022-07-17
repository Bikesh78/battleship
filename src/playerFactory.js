import gameBoardFactory from "./gameBoardFactory";
import shipFactory from "./shipFactory";

export default function playerFactory(name) {
  const playerGameBoard = gameBoardFactory();
  const isAlreadyShot = (position, oppositionGameBoard) => {
    console.log(oppositionGameBoard.hitCoordinates);
    if (oppositionGameBoard.hitCoordinates.includes(position)) {
      return true;
    } else return false;
  };
  let isValid = true;
  const isTurnOver = () => {
    return isValid;
  };
  const attack = (position, oppositionGameBoard) => {
    if (isAlreadyShot(position, oppositionGameBoard)) {
      // console.log("item", position);
      // return
      isValid = false;
      return "Not valid";
    } else {
      isValid = true;
      oppositionGameBoard.hitCoordinates.push(position);
      return oppositionGameBoard.receiveAttack(position);
    }
  };
  const randomAttack = (oppositionGameBoard) => {
    let randomPosition = Math.floor(Math.random() * 100);
    while (isAlreadyShot(randomPosition, oppositionGameBoard)) {
      randomPosition = Math.floor(Math.random() * 100);
    }
    oppositionGameBoard.hitCoordinates.push(randomPosition);
    // console.log("ddd", oppositionGameBoard);
    return oppositionGameBoard.receiveAttack(randomPosition);
  };
  const randomlyPlaceShip = () => {
    // instantiate ships
    const submarine = shipFactory("submarine");
    const carrier = shipFactory("carrier");
    const battleship = shipFactory("battleship");
    const cruiser = shipFactory("cruiser");
    const destroyer = shipFactory("destroyer");
    // let { shipList } = playerGameBoard;

    playerGameBoard.shipList.push(
      submarine,
      carrier,
      battleship,
      cruiser,
      destroyer
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
