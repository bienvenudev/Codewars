function elevator(left, right, call){
  // call should be close to left or right/ 
  // interval btn call and left or right should be close 
  
  const leftDist = call - left 
  const rightDist = call - right 
  
if (leftDist < 0 && rightDist < 0) {
    if (rightDist > leftDist) {
    //   console.log('oops')
    return 'right'
  } else if (leftDist > rightDist) {
    return 'left'
  } else if (leftDist === rightDist) {
        return 'right'
  }     
    } else if (leftDist === rightDist) {
        return 'right'
  } else if (call === right && call === left) {
    return 'right'
  } else if (call === right) {
    return 'right'
  } else if (call === left) {
    return 'left'
  } else if (rightDist < leftDist) {
    //   console.log('oops')
    return 'right'
  } else if (leftDist < rightDist) {
    return 'left'
  }
}