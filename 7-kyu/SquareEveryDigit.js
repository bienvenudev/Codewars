function squareDigits(num) {
  /// split the num into an array
  /// loop over the array and square each number
  /// push the new squares in a new array
  /// join the array and turn into number again

  const numString = num.toString();
  const resultArray = [];

  for (let i = 0; i < numString.length; i++) {
    resultArray.push(numString[i] * numString[i]);
  }
  return Number(resultArray.join(""));
}

// should return 4925
console.log(squareDigits(235));
