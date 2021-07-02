import { Pet } from "../src/Pet";

describe("Constructor", () => {
  const dave = new Pet("Dave");

  it("can be instantiated", () => {
    expect(dave).toBeInstanceOf(Pet);
  });

  it("sets the name of the Pet to 'Dave'", () => {
    expect(dave.name).toEqual("Dave");
  })
});

describe("grow up", () => {
  const dave = new Pet("Dave");

  it("grows old by one unit", () => {
    dave.growUp();
    expect(dave.age).toBe(1);
  });
});