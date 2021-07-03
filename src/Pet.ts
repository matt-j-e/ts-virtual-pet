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

  feedTrigger: number = 4;
  walkTrigger: number = 4;

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
    if (this.fitness < this.walkTrigger && this.hunger > this.feedTrigger) return "I am hungry AND I need a walk";
    if (this.fitness < this.walkTrigger) return "I need a walk";
    if (this.hunger > this.feedTrigger) return "I am hungry";
    return "I feel great!";
  }

  get isAlive(): boolean {
    return (this.age < 30 && this.hunger < 10 && this.fitness > 0);
  }
}
