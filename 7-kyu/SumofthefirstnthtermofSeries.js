function SeriesSum(n) {
  // handle if n = 0
  if (n === 0) {
    return "0.00";
  }

  // variable to hold denominator
  let num = 1;

  // variable to hold sum of the nth term
  let start = 1;

  // loop using the count of n
  for (let i = 0; i < n - 1; i++) {
    // every iteration add 3 to denominator
    num += 3;
    // calculate nth term of the sequence
    start += 1 / num;
  }
  const roundedNumber = start.toFixed(2);

  return String(roundedNumber);
}

// test should return 1.57
console.log(SeriesSum(5));
