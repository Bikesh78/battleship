// let shipList = [];
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
    // const ship = shipList.find((ship) => ship.id === shipId);
    // const hitPositions = ship.hitPositions;
    // const length = ship.length;
    if (hitPositions.length === length) {
      return "Sunk";
    } else {
      //   return false;
      return false;
    }
  };
  // shipList.push({ id, length, hit, isSunk, hitPositions });
  return { id, length, hit, isSunk };
}

function gameBoardFactory() {
  // create gameBoard Array
  const gameBoard = [];
  const shipList = [];
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
      // console.log("item", item);
      if (item === shipId) {
        // return index;
        shipPosition.push(index);
      }
    });
    return shipPosition;
  };
  function isShipOutOfBound(shipDirection, initialPosition, shipLength) {
    if (shipDirection === "horizontal") {
      // All the rows have same tens values e.g first row: 0 to 9, second row: 10 to 19.
      // Having different tens values means the ship is out of bound
      const lastShipCoordinate = initialPosition + shipLength;
      const initialTensValue = Math.floor(initialPosition / 10);
      const lastTensValue = Math.floor(lastShipCoordinate / 10);
      if (initialTensValue !== lastTensValue) {
        return true;
      } else return false;
    } else if (shipDirection === "vertical") {
      // The coordiantes in gameboard ranges from 0 to 99.
      // So the ship's coordinate should not be greater than 99
      const lastShipCoordinate = initialPosition + (shipLength - 1) * 10;
      if (lastShipCoordinate > 99) {
        return true;
      } else return false;
    }
  }
  function isCellOccupied(shipDirection, initialPosition, shipLength) {
    if (shipDirection === "horizontal") {
      let occupiedCell = 0;
      for (let i = 0; i < shipLength; i++) {
        if (gameBoard[initialPosition + i] !== "") {
          occupiedCell++;
          break;
        }
      }
      if (occupiedCell) {
        return true;
      } else return false;
    } else if (shipDirection === "vertical") {
      let occupiedCell = 0;
      for (let i = 0; i < shipLength; i++) {
        if (gameBoard[initialPosition + 10 * i] !== "") {
          occupiedCell++;
          break;
        }
      }
      if (occupiedCell) {
        return true;
      } else return false;
    }
  }
  function isMoveValid(shipDirection, initialPosition, shipLength) {
    if (isShipOutOfBound(shipDirection, initialPosition, shipLength)) {
      return false;
    }
    if (isCellOccupied(shipDirection, initialPosition, shipLength)) {
      return false;
    }
    return true;
  }
  // const shipCoordinates = [];
  const placeShip = (ship, initialPosition) => {
    // const ship = shipList.filter((item) => item.id == shipId);
    const shipLength = ship.length;
    if (shipDirection === "horizontal") {
      if (isMoveValid(shipDirection, initialPosition, shipLength)) {
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + i] = ship.id;
          i++;
        }
      } else {
        return "Not Valid";
      }
    } else if (shipDirection === "vertical") {
      if (isMoveValid(shipDirection, initialPosition, shipLength)) {
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + 10 * i] = ship.id;
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
    // console.table(gameBoard);
    console.log(gameBoard[attackCoordinate]);
    if (gameBoard[attackCoordinate] === "") {
      gameBoard[attackCoordinate] = "Missed";
      // return gameBoard[attackCoordinate];
      return "Missed";
    } else {
      const ship = shipList.find(
        (ship) => ship.id === gameBoard[attackCoordinate]
      );
      console.log("ship", ship);
      return ship.hit(attackCoordinate);
    }
  };
  const hasEveryShipSunk = () => {
    console.log(gameBoard);
    console.log(shipList);
    console.log(gameBoard);
    return shipList.every((ship) => ship.isSunk());
  };
  return {
    shipList,
    setShipDirection,
    placeShip,
    getShipPosition,
    receiveAttack,
    hasEveryShipSunk,
  };
}

export { shipFactory, gameBoardFactory };
