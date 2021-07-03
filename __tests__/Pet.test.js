"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pet_1 = require("../src/Pet");
describe("Constructor", function () {
    var dave = new Pet_1.Pet("Dave");
    it("can be instantiated", function () {
        expect(dave).toBeInstanceOf(Pet_1.Pet);
    });
    it("sets the name of the Pet to 'Dave'", function () {
        expect(dave.name).toEqual("Dave");
    });
    it("has initial age of 0", function () {
        expect(dave.age).toBe(0);
    });
    it("has initial hunger of 0", function () {
        expect(dave.hunger).toBe(0);
    });
    it("has initial fitness of 10", function () {
        expect(dave.fitness).toBe(10);
    });
});
describe("grow up", function () {
    var dave;
    beforeEach(function () {
        dave = new Pet_1.Pet("Dave");
    });
    it("grows old by one unit per call to growUp()", function () {
        dave.growUp();
        expect(dave.age).toBe(1);
        dave.growUp();
        dave.growUp();
        expect(dave.age).toBe(3);
    });
    it("adds 5 hunger units per call to growUp()", function () {
        dave.growUp();
        expect(dave.hunger).toBe(5);
    });
    it("loses 3 fitness units per call to growUp()", function () {
        dave.growUp();
        expect(dave.fitness).toBe(7);
    });
});
describe("walk", function () {
    var dave;
    beforeEach(function () {
        dave = new Pet_1.Pet("Dave");
    });
    it("gains fitness by 4 units per call to walk()", function () {
        dave.growUp();
        dave.growUp();
        dave.walk();
        expect(dave.fitness).toBe(10 - 3 - 3 + 4);
    });
    it("cannot increase fitness level beyond 10", function () {
        dave.growUp();
        dave.walk();
        expect(dave.fitness).toBe(10);
    });
});
describe("feed", function () {
    var dave;
    beforeEach(function () {
        dave = new Pet_1.Pet("Dave");
    });
    it("reduces hunger by 3 units per call to feed()", function () {
        dave.growUp();
        dave.feed();
        expect(dave.hunger).toBe(2);
    });
    it("cannot decrease hunger level below 0", function () {
        dave.growUp();
        dave.feed();
        dave.feed();
        expect(dave.hunger).toBe(0);
    });
});
describe("checkUp", function () {
    var dave;
    beforeEach(function () {
        dave = new Pet_1.Pet("Dave");
    });
    it("returns 'I need a walk' when fitness level < 4", function () {
        dave.growUp(); // H5 F7
        dave.feed(); // H2 F7
        dave.growUp(); // H7 F4
        dave.feed(); // H4 F4
        dave.feed(); // H1 F4
        dave.growUp(); // H6 F1
        dave.feed();
        expect(dave.checkUp()).toBe("I need a walk");
    });
    it("return 'I am hungry' when hunger level > 4", function () {
        dave.growUp();
        expect(dave.checkUp()).toBe("I am hungry");
    });
    it("returns 'I am hungry AND I need a walk'", function () {
        dave.growUp(); // H5 F7
        dave.feed(); // H2 F7
        dave.growUp(); // H7 F4
        dave.feed(); // H4 F4
        dave.feed(); // H1 F4
        dave.growUp(); // H6 F1
        expect(dave.checkUp()).toBe("I am hungry AND I need a walk");
    });
    it("returns appropriate messages", function () {
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
