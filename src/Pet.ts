export class Pet {
  age: number = 0;
  hunger: number = 0;
  fitness: number = 10;

  constructor(public name: string) {}

  growUp(): void {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  }

  walk(): void {
    this.fitness += 4;
    if (this.fitness > 10) this.fitness = 10;
  }
}
