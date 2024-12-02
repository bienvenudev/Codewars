String.prototype.isUpperCase = function () {
  // split into array
  const array = this.split("");
  const results = [];

  // if letter is not uppercase push false to results else push true
  array.forEach((letter) => {
    if (letter.toUpperCase() !== letter) {
      results.push(false);
    } else {
      results.push(true);
    }
  });

  // if results array includes false immediately return false (found a lowercase letter)
  return results.includes(false) ? false : true;
};

// test should return false
console.log("CItY".isUpperCase());
// test should return true
console.log("CITY".isUpperCase());
