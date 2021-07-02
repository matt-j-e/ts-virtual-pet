import { Pet } from "../src/Pet";

interface pet {
  name: string;
  age: number;
  hunger: number;
  fitness: number;
  growUp(): void;
  walk(): void;
}

describe("Constructor", () => {
  const dave = new Pet("Dave");

  it("can be instantiated", () => {
    expect(dave).toBeInstanceOf(Pet);
  });

  it("sets the name of the Pet to 'Dave'", () => {
    expect(dave.name).toEqual("Dave");
  });

  it("has initial age of 0", () => {
    expect(dave.age).toBe(0);
  });

  it("has initial hunger of 0", () => {
    expect(dave.hunger).toBe(0);
  });

  it("has initial fitness of 10", () => {
    expect(dave.fitness).toBe(10);
  });
});

describe("grow up", () => {
  let dave: pet;
  beforeEach(() => {
    dave = new Pet("Dave");
  });

  it("grows old by one unit per call to growUp()", () => {
    dave.growUp();
    expect(dave.age).toBe(1);
    dave.growUp();
    dave.growUp();
    expect(dave.age).toBe(3);
  });

  it("adds 5 hunger units per call to growUp()", () => {
    dave.growUp();
    expect(dave.hunger).toBe(5);
  });

  it("loses 3 fitness units per call to growUp()", () => {
    dave.growUp();
    expect(dave.fitness).toBe(7);
  });
});

describe("walk", () => {
  let dave: pet;
  beforeEach(() => {
    dave = new Pet("Dave");
  });

  it("gains fitness by 4 units per call to walk()", () => {
    dave.growUp();
    dave.growUp();
    dave.walk();
    expect(dave.fitness).toBe(10-3-3+4);
  });
});

