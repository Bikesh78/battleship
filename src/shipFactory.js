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
  return {
    id,
    length,
    hit,
    isSunk,
    shipDirection,
  };
}
