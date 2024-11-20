function pipeFix(numbers) {
  // retrieve the first and last element in the array
  // store them in two different variables - min and max
  // loop starting from the min and ending at max

  const min = numbers[0];
  const max = numbers[numbers.length - 1];
  const pipenumbers = [];

  for (i = min; i <= max; i++) {
    pipenumbers.push(i);
  }
  return pipenumbers;
}

// test should return [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([1, 2, 3, 12]));
