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
  const hitPositions = [];
  const hit = ([x, y]) => {
    hitPositions.push([x, y]);
    return hitPositions[hitPositions.length - 1];
  };
  //   const shipInitialCoordinates = [1, 1];
  //   const shipDirection = "horizontal";
  //   const shipCoordinates = [];

  //   if (shipDirection === "horizontal") {
  //     let i = 0;
  //     while (i < length) {
  //       shipCoordinates.push(
  //         shipInitialCoordinates.map((item, index) => {
  //           if (index === 1) {
  //             return item + i;
  //           } else return item;
  //         })
  //       );
  //       i++;
  //     }
  //   } else if (shipDirection === "vertical") {
  //     let i = 0;
  //     while (i < length) {
  //       shipCoordinates.push(
  //         shipInitialCoordinates.map((item, index) => {
  //           if (index === 0) {
  //             return item + 1;
  //           } else {
  //             return item;
  //           }
  //         })
  //       );
  //     }
  //   }

  const isSunk = (shipCoordinates) => {
    if (JSON.stringify(hitPositions) === JSON.stringify(shipCoordinates)) {
      return "Sunk";
    } else {
      //   return false;
      return shipCoordinates;
    }
  };
  return { length, hit, isSunk };
}

function gameBoardFactory() {
  let shipDirection = "";
  const setShipDirection = (direction) => {
    return (shipDirection = direction);
  };

  const placeShip = (shipName, initialPosition) => {
    const ship = shipFactory(shipName);
    const shipLength = ship.length;
    const shipCoordinates = [];

    if (shipDirection === "vertical") {
      let i = 0;
      while (i < shipLength) {
        shipCoordinates.push(
          initialPosition.map((item, index) => {
            if (index === 0) {
              return item + 1;
            } else {
              return item;
            }
          })
        );
      }
    } else if (shipDirection === "horizontal") {
      let i = 0;
      while (i < shipLength) {
        shipCoordinates.push(
          initialPosition.map((item, index) => {
            if (index === 1) {
              return item + i;
            } else return item;
          })
        );
        i++;
      }
    }
    return shipCoordinates;
  };
  return { setShipDirection, placeShip };
}

export { shipFactory, gameBoardFactory };
