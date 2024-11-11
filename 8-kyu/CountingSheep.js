function countSheeps(sheep) {
  // initialize a variable counting from 0
  // loop through the array
  // if true increment the variable
  let count = 0
    for (i = 0; i<sheep.length; i++) {
    if (sheep[i] === true) {
        count += 1
    }
  }
  return count
}

// this test should return 2
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))
