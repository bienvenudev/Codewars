function findShort(s) {
  // split and loop through arr
  // store shortest length in a new arr
  // use Math.min on the arr

  const arrayOfString = s.split(' ');
  const allLength = [];

    for (let i = 0; i < arrayOfString.length; i++) {
      const currentWordLength = arrayOfString[i].length;

      allLength.push(currentWordLength);
  }

  console.log(Math.min(...allLength));
  

}

// tests
findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");
findShort("Let's travel abroad shall we");
