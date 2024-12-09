// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(side) {
    if (typeof side !== "number") {
      this.side = 0;
    } else {
      this.side = Math.abs(side);
    }
  }

  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

// test run
const cube = new Cube();
console.log(cube);
cube.setSide(8);
console.log(cube);
