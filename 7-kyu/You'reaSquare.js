var isSquare = function (n) {
  // negative can't be squares
  // find the square root 
  const squareRoot= Math.sqrt(n)
  return Math.floor(squareRoot) == squareRoot
};

console.log(isSquare(25));
console.log(isSquare(8));
