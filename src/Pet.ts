export class Pet {
  age: number = 0;
  hunger: number = 0;
  fitness: number = 10;

  growEffect: {
    age: number,
    hunger: number,
    fitness: number
  } = {
    age: 1,
    hunger: 5,
    fitness: -3,
  };

  walkEffect: { fitness: number } = {
    fitness: 4,
  };

  feedEffect: { hunger: number } = {
    hunger: -3,
  };

  minHunger: number = 0;
  maxFitness: number = 10;

  feedTrigger: number = 4;
  walkTrigger: number = 4;

  death: { age: number, hunger: number, fitness: number } = {
    age: 30,
    hunger: 10,
    fitness: 0,
  };

  messages: {
    hunger: string,
    fitness: string,
    hungerAndFitness: string,
    death: string,
    default: string
  } = {
    hunger: "I am hungry",
    fitness: "I need a walk",
    hungerAndFitness: "I am hungry AND I need a walk",
    death: "Your pet has snuffed it.",
    default: "I feel great!"
  }

  constructor(public name: string = "Eric") {}

  growUp(): void {
    if (!this.isAlive) throw new Error(this.messages.death)
    this.age += this.growEffect.age;
    this.hunger += this.growEffect.hunger;
    this.fitness += this.growEffect.fitness;;
  }

  walk(): void {
    if (!this.isAlive) throw new Error(this.messages.death)
    this.fitness += this.walkEffect.fitness;
    if (this.fitness > this.maxFitness) this.fitness = this.maxFitness;
  }

  feed(): void {
    if (!this.isAlive) throw new Error(this.messages.death)
    this.hunger += this.feedEffect.hunger;
    if (this.hunger < this.minHunger) this.hunger = this.minHunger;
  }

  checkUp(): string {
    if (!this.isAlive) return this.messages.death;
    if (this.fitness < this.walkTrigger && this.hunger > this.feedTrigger) return this.messages.hungerAndFitness;
    if (this.fitness < this.walkTrigger) return this.messages.fitness;
    if (this.hunger > this.feedTrigger) return this.messages.hunger;
    return this.messages.default;
  }

  get isAlive(): boolean {
    return (this.age < this.death.age && this.hunger < this.death.hunger && this.fitness > this.death.fitness);
  }
}
