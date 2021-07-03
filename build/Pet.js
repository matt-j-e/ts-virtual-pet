"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
var Pet = /** @class */ (function () {
    function Pet(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.growEffect = {
            age: 1,
            hunger: 5,
            fitness: -3,
        };
        this.walkEffect = {
            fitness: 4,
        };
        this.feedEffect = {
            hunger: -3,
        };
        this.minHunger = 0;
        this.maxFitness = 10;
    }
    Pet.prototype.growUp = function () {
        this.age += this.growEffect.age;
        this.hunger += this.growEffect.hunger;
        this.fitness += this.growEffect.fitness;
        ;
    };
    Pet.prototype.walk = function () {
        this.fitness += this.walkEffect.fitness;
        if (this.fitness > this.maxFitness)
            this.fitness = this.maxFitness;
    };
    Pet.prototype.feed = function () {
        this.hunger += this.feedEffect.hunger;
        if (this.hunger < this.minHunger)
            this.hunger = this.minHunger;
    };
    Pet.prototype.checkUp = function () {
        if (this.fitness < 4 && this.hunger > 4)
            return "I am hungry AND I need a walk";
        if (this.fitness < 4)
            return "I need a walk";
        if (this.hunger > 4)
            return "I am hungry";
        return "I feel great!";
    };
    return Pet;
}());
exports.Pet = Pet;
