import { Pet } from "../src/Pet";

interface pet {
  name: string;
  age: number;
  hunger: number;
  fitness: number;
  growUp(): void;
  walk(): void;
  feed(): void;
  checkUp(): string;
  isAlive: boolean;
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

  it("cannot increase fitness level beyond 10", () => {
    dave.growUp();
    dave.walk();
    expect(dave.fitness).toBe(10);
  });
});

describe("feed", () => {
  let dave: pet;
  beforeEach(() => {
    dave = new Pet("Dave");
  });

  it("reduces hunger by 3 units per call to feed()", () => {
    dave.growUp();
    dave.feed();
    expect(dave.hunger).toBe(2);
  });

  it("cannot decrease hunger level below 0", () => {
    dave.growUp();
    dave.feed();
    dave.feed();
    expect(dave.hunger).toBe(0);
  });
});

describe("checkUp", () => {
  let dave: pet;
  beforeEach(() => {
    dave = new Pet("Dave");
  });

  it("returns 'I need a walk' when fitness level < 4", () => {
    dave.growUp(); // H5 F7
    dave.feed();   // H2 F7
    dave.growUp(); // H7 F4
    dave.feed();   // H4 F4
    dave.feed();   // H1 F4
    dave.growUp(); // H6 F1
    dave.feed();
    expect(dave.checkUp()).toBe("I need a walk");
  });

  it("return 'I am hungry' when hunger level > 4", () => {
    dave.growUp()
    expect(dave.checkUp()).toBe("I am hungry");
  });

  it("returns 'I am hungry AND I need a walk'", () => {
    dave.growUp(); // H5 F7
    dave.feed();   // H2 F7
    dave.growUp(); // H7 F4
    dave.feed();   // H4 F4
    dave.feed();   // H1 F4
    dave.growUp(); // H6 F1
    expect(dave.checkUp()).toBe("I am hungry AND I need a walk");
  });

  it("returns appropriate messages", () => {
    expect(dave.checkUp()).toBe("I feel great!");
    dave.growUp(); // H5 F7
    expect(dave.checkUp()).toBe("I am hungry");
    dave.feed(); // H2 F7
    expect(dave.checkUp()).toBe("I feel great!");
    dave.growUp(); // H7 F4
    expect(dave.checkUp()).toBe("I am hungry");
    dave.feed(); // H4 F4
    expect(dave.checkUp()).toBe("I feel great!");
    dave.growUp(); // H9 F1
    expect(dave.checkUp()).toBe("I am hungry AND I need a walk");
    dave.walk(); // H9 F5
    expect(dave.checkUp()).toBe("I am hungry");
  });
});

describe("isAlive", () => {
  let dave: pet;
  beforeEach(() => {
    dave = new Pet("Dave");
  });
  
  it("returns true when hunger < 10, false otherwise", () => {
    expect(dave.isAlive).toBe(true);
    dave.growUp();
    dave.growUp();
    expect(dave.isAlive).toBe(false);
  });

  it("returns true when fitness > 0, false otherwise", () => {
    expect(dave.isAlive).toBe(true);
    dave.fitness = 0;
    expect(dave.isAlive).toBe(false);
  });
  
});
