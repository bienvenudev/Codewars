function sum (numbers) {
  // add all numbers in the array
   const sum = numbers.reduce((acc, init) => acc + init, 0)
   return sum
}
 
// the test should return 9.2
console.log(sum([1, 5.2, 4, 0, -1]))