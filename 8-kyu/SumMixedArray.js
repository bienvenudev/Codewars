// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  const allNumbers = x.map((num) => Number(num))
  const sum = allNumbers.reduce((acc, init) => acc + init, 0)
  return sum
  // check for non-integers - check
  // transform into numbers - check
  // use reduce to return the sum - check
}

// this test should return 22
console.log(sumMix([9, 3, '7', '3']))