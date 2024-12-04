function countBy(x, n) {
  // create a new empty array
  // use a for loop and start from 0
  // if a number is divisible by x add it to the array
  // stop when new array.length reaches n
  let z = [];

  for (let i = 1; z.length < n; i++) {
    if (i % x == 0) {
      z.push(i);
    }
  }
  return z;
}

// test should return [ 2, 4, 6, 8, 10 ]
console.log(countBy(2, 5));
