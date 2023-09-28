class NameOfClass {
  constructor(a, b) {
    this.aA = a;
    this.bB = b;
    this.aB = a + b;
  }
}

const anArray = [1, 2, 3];

const variable = new NameOfClass(anArray);

console.log(variable.aA);
