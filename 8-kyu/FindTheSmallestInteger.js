function findSmallestInt(arr) {
  const lowest = Math.min(...arr);
  return lowest;
}

// the solution should return 2
console.log(findSmallestInt([34, 15, 88, 2]));
