function findShort(s) {
  // split and loop through arr
  // store shortest length in a new arr
  // use Math.min on the arr

  const arrayOfString = s.split(" ");
  const shortestLength = Math.min(...arrayOfString.map((x) => x.length));
  console.log(shortestLength);
}

// tests
findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");
findShort("Let's travel abroad shall we");
