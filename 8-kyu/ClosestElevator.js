function elevator(left, right, call) {
  // use Math.abs to calculate distance
  const leftDist = Math.abs(call - left);
  const rightDist = Math.abs(call - right);

  // return right if the distance is equal
  if (leftDist === rightDist) {
    return "right";
  }

  // return the closest elevator
  return leftDist < rightDist ? "left" : "right";
}
