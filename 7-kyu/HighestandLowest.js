function highAndLow(numbers) {
  const numArray = numbers.split(" ");
  const lowestNumber = Math.min(...numArray);
  const highestNumber = Math.max(...numArray);

  return `${highestNumber} ${lowestNumber}`;
}

// should return "42 -9"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// should return  "3 1"
console.log(highAndLow("1 2 3"));
