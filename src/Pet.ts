export class Pet {
  age: number = 0;

  constructor(public name: string) {}

  growUp(): void {
    this.age++;
  }
}
