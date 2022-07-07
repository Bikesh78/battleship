import gameBoardFactory from "./gameBoardFactory";

export default function playerFactory(name) {
  const gameBoard = gameBoardFactory();
  const isAlreadyShot = (position, oppositionGameBoard) => {
    if (oppositionGameBoard.hitCoordinates.includes(position)) {
      return true;
    } else return false;
  };
  const attack = (position, oppositionGameBoard) => {
    if (isAlreadyShot(position, oppositionGameBoard)) {
      // console.log("item", position);
      // return
      return "Not valid";
    } else {
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
    console.log("ddd", oppositionGameBoard);
    return oppositionGameBoard.receiveAttack(randomPosition);
  };
  return { name, gameBoard, attack, randomAttack };
}
