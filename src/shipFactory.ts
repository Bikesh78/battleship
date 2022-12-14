export type shipType =
  | "carrier"
  | "battleship"
  | "cruiser"
  | "submarine"
  | "destroyer";

export default function shipFactory(name: string): {
  id: shipType;
  length: number;
  hit: (position: number) => number;
  isSunk: () => boolean;
  shipDirection: "horizontal" | "vertical";
} {
  let length: number;
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
      throw Error("Ship name is not defined");
  }

  const id: shipType = name;
  const hitPositions: Array<number> = [];
  let shipDirection: "horizontal" | "vertical" = "horizontal";
  const hit = (position: number): number => {
    hitPositions.push(position);
    return hitPositions[hitPositions.length - 1];
  };

  const isSunk: () => boolean = () => {
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
