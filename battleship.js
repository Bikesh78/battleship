let shipList = [];
function shipFactory(name) {
  let length;
  switch (name) {
    case "carrier":
      length = 5;
      break;
    case "battleship":
      length = 4;
      break;
    case "cruiser":
      length = 3;
      break;
    case "submarine":
      length = 3;
      break;
    case "destroyer":
      length = 2;
      break;
    default:
      return;
  }
  const id = name;
  const hitPositions = [];
  const hit = (position) => {
    /*  hitPositions.push([x, y]);
    return hitPositions[hitPositions.length - 1]; */
    hitPositions.push(position);
    return hitPositions[hitPositions.length - 1];
  };
  /*   const shipInitialCoordinates = [1, 1];
    const shipDirection = "horizontal";
    const shipCoordinates = [];

    if (shipDirection === "horizontal") {
      let i = 0;
      while (i < length) {
        shipCoordinates.push(
          shipInitialCoordinates.map((item, index) => {
            if (index === 1) {
              return item + i;
            } else return item;
          })
        );
        i++;
      }
    } else if (shipDirection === "vertical") {
      let i = 0;
      while (i < length) {
        shipCoordinates.push(
          shipInitialCoordinates.map((item, index) => {
            if (index === 0) {
              return item + 1;
            } else {
              return item;
            }
          })
        );
      }
    } */

  const isSunk = (shipId) => {
    if (hitPositions.length === length) {
      return "Sunk";
    } else {
      //   return false;
      return false;
    }
  };
  shipList.push({ id, length, hit, isSunk, hitPositions });
  return { id, length, hit, isSunk };
}

function gameBoardFactory() {
  // create gameBoard Array
  const gameBoard = [];
  for (let i = 0; i < 100; i++) {
    gameBoard.push("");
  }

  let shipDirection = "";
  const setShipDirection = (direction) => {
    return (shipDirection = direction);
  };
  const getShipPosition = (shipId) => {
    const shipPosition = [];
    gameBoard.forEach((item, index) => {
      if (item === shipId) {
        // return index;
        shipPosition.push(index);
      }
    });
    return shipPosition;
  };
  // const shipCoordinates = [];
  const placeShip = (shipId, initialPosition) => {
    // const ship = shipFactory(shipName);
    const ship = shipList.filter((item) => item.id == shipId);
    const shipLength = ship[0].length;
    /* if (shipLength + initialPosition > 10) {
      return "Not valid";
    } */

    function isMoveValid(shipDirection) {
      if (shipDirection === "horizontal") {
        // All the rows have same tens values e.g first row: 0 to 9, second row: 10 to 19.
        // Having different tens values means the ship has exceeded its horizontal limit and move is invalied
        const lastShipCoordinate = initialPosition + shipLength;
        const initialTensValue = Math.floor(initialPosition / 10);
        const lastTensValue = Math.floor(lastShipCoordinate / 10);
        if (initialTensValue !== lastTensValue) {
          return false;
        }
        return true;
      } else if (shipDirection === "vertical") {
        // The coordiantes in gameboard ranges from 0 to 99.
        // So the ship's coordinate should not be greater than 99
        const lastShipCoordinate = initialPosition + (shipLength - 1) * 10;
        if (lastShipCoordinate > 99) {
          return false;
        }
        return true;
      }
    }
    if (shipDirection === "horizontal") {
      if (isMoveValid(shipDirection)) {
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + i] = ship[0].id;
          i++;
        }
      } else {
        return "Not Valid";
      }
    } else if (shipDirection === "vertical") {
      if (isMoveValid(shipDirection)) {
        let i = 0;
        while (i < shipLength) {
          if (i === 0) {
            gameBoard[initialPosition + i] = ship[0].id;
          } else {
            gameBoard[initialPosition + 10 * i] = ship[0].id;
          }
          i++;
        }
      } else {
        return "Not Valid";
      }
    }
    // return shipCoordinates;
    // return getShipPosition(shipId);
    return gameBoard;
  };

  const receiveAttack = (attackCoordinate) => {
    if (gameBoard[attackCoordinate] === "") {
      gameBoard[attackCoordinate] = "Missed";
    } else {
      const ship = shipList.find(
        (ship) => ship.id === gameBoard[attackCoordinate]
      );
      console.log(ship);
      return ship.hit(attackCoordinate);
    }
  };
  return { setShipDirection, placeShip, getShipPosition, receiveAttack };
}

export { shipFactory, gameBoardFactory };
