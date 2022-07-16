export default function shipFactory(name) {
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
  let shipDirection = "";
  /*  const setShipDirection = (direction) => {
    if (!direction) {
      return (shipDirection = "horizontal");
    } else {
      return (shipDirection = direction);
    }
  }; */
  const hit = (position) => {
    hitPositions.push(position);
    return hitPositions[hitPositions.length - 1];
  };

  const isSunk = () => {
    if (hitPositions.length === length) {
      return true;
    } else {
      return false;
    }
  };
  // shipList.push({ id, length, hit, isSunk, hitPositions });
  return {
    id,
    length,
    hit,
    isSunk,
    shipDirection,
  };
}
