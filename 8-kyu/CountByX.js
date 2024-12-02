function countBy(x, n) {
  let z = [];
  let start = x
  
  for (let i = x-1; i <= n; i++) {
    z.push(x * i)
  }
  // z.unshift(start)
  return z;
}

console.log(countBy(2, 5))