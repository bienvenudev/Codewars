function drawStairs(n) {
  // initial space to be incremented
  let space = "";
  // I to form steps
  const step = "I";
  // array to hold final results
  const results = [];
  for (i = 0; i < n; i++) {
    // add the last step with no extra space
    if (i === n - 1) {
      results.push(step);
      break;
    }
    results.push(`${step}\n ${space}`);
    space += " ";
  }
  // join the array back into a string
  console.log(results.join(""));
}

// should return exactly 5 steps
drawStairs(5);
