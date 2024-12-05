function drawStairs(n) {
  // after every I put \n
  // after every \n add another space
  let space = '';
  for (i=0; i<n; i++) {
      space += ' '
      console.log(`I\n ${space}`)
  }
 
 }
 
 drawStairs(3)
 
 // answer should be this
 // console.log("I\n I\n  I\n   I")