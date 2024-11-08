// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note: Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  const allPoints = classPoints.reduce((acc, init) => acc + init, 0);
  const length = classPoints.length + 1;
  const average = (allPoints + yourPoints) / length;

  return average < yourPoints ? true : false
  
  // add all points from the class + my points (reduce) - checked
  // divide the sum by the length of the array + 1 (add my points) - checked
  // if the answer of the previous division < my points ? true : false - checked
};

// sample test
console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))