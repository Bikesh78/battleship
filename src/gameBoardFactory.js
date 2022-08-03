export default function gameBoardFactory() {
  // create gameBoard Array
  const gameBoard = [];
  const shipList = [];
  const hitCoordinates = [];
  for (let i = 0; i < 100; i++) {
    gameBoard.push("");
  }
  const setShipDirection = (ship, direction) => {
    return (ship.shipDirection = direction);
  };
  const getShipPosition = (shipId) => {
    const shipPosition = [];
    gameBoard.forEach((item, index) => {
      if (item === shipId) {
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
  let isValid = true;
  const isValidPosition = () => {
    return isValid;
  };
  const placeShip = (ship, initialPosition) => {
    if (!ship.shipDirection) {
      setShipDirection(ship, "horizontal");
    }
    const shipLength = ship.length;
    let { shipDirection } = ship;
    if (shipDirection === "horizontal") {
      if (isMoveValid(shipDirection, initialPosition, shipLength)) {
        isValid = true;
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + i] = ship.id;
          i++;
        }
      } else {
        isValid = false;
        return "Not Valid";
      }
    } else if (shipDirection === "vertical") {
      if (isMoveValid(shipDirection, initialPosition, shipLength)) {
        isValid = true;
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + 10 * i] = ship.id;
          i++;
        }
      } else {
        isValid = false;
        return "Not Valid";
      }
    }
    return gameBoard;
  };
  let shipIsHit = false;
  const isShipHit = () => {
    return shipIsHit;
  };
  const receiveAttack = (attackCoordinate) => {
    if (gameBoard[attackCoordinate] === "") {
      gameBoard[attackCoordinate] = "Missed";
      shipIsHit = false;
      return "Missed";
    } else {
      const ship = shipList.find(
        (ship) => ship.id === gameBoard[attackCoordinate]
      );
      gameBoard[attackCoordinate] = "Hit";
      shipIsHit = true;
      return ship.hit(attackCoordinate);
    }
  };
  const hasEveryShipSunk = () => {
    return shipList.every((ship) => ship.isSunk());
  };
  return {
    gameBoard,
    shipList,
    hitCoordinates,
    setShipDirection,
    placeShip,
    getShipPosition,
    receiveAttack,
    hasEveryShipSunk,
    isShipHit,
    isValidPosition,
  };
}