/* eslint-disable no-undef */
import shipFactory from "../shipFactory";

describe("ship object", () => {
  test("get ship length", () => {
    const ship = shipFactory("submarine");
    expect(ship.length).toBe(3);
  });
  test("get hit location", () => {
    const ship = shipFactory("submarine");
    expect(ship.hit(15)).toStrictEqual(15);
  }); 
  test("check horizontally placed ship is sunk", () => {
    const ship = shipFactory("destroyer");
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});
