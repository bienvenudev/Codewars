function XO(str) {
  // turn into lowercase
  // create 2 counters, one for o another for x
  // loop through and if you find x increment counter same for o

  const lowerString = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < lowerString.length; i++) {
    const currentString = lowerString[i];
    if (currentString == "x") {
      countX++;
    } else if (currentString == "o") {
      countO++;
    }
  }
  console.log(countO == countX);
}

// tests
XO("xo"); //true
XO("xxOo"); //true
XO("xxxm"); //false
XO("Oo"); //false
