export class Pet {
  age: number = 0;
  hunger: number = 0;
  fitness: number = 10;

  growEffect = {
    age: 1,
    hunger: 5,
    fitness: -3,
  };

  walkEffect = {
    fitness: 4,
  };

  feedEffect = {
    hunger: -3,
  }

  minHunger: number = 0;
  maxFitness: number = 10;

  constructor(public name: string = "Eric") {}

  growUp(): void {
    this.age += this.growEffect.age;
    this.hunger += this.growEffect.hunger;
    this.fitness += this.growEffect.fitness;;
  }

  walk(): void {
    this.fitness += this.walkEffect.fitness;
    if (this.fitness > this.maxFitness) this.fitness = this.maxFitness;
  }

  feed(): void {
    this.hunger += this.feedEffect.hunger;
    if (this.hunger < this.minHunger) this.hunger = this.minHunger;
  }

  checkUp(): string {
    if (this.fitness < 4 && this.hunger > 4) return "I am hungry AND I need a walk";
    if (this.fitness < 4) return "I need a walk";
    if (this.hunger > 4) return "I am hungry";
    return "I feel great!";
  }
}
