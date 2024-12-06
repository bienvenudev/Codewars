function drawStairs(n) {
  let space = "";
  let char = "I\n";
  let results = [];
  for (i = 0; i < n; i++) {
    results.push(`${char} ${space}`);
    space += " ";
  }
  console.log(results.join(''));
}

drawStairs(5);
