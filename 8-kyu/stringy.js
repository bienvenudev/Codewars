function stringy(size) {
  // better approach using str.repeat
  let string = ''
  string += '10'.repeat(size).slice(0, size)
  return string
}

// output should be 1010
console.log(stringy(4))

// function stringy(size) {
//   // loop using size
//   const arr = [];
//   for (i = 0; i < size; i++) {
//     arr.push(1);
//     arr.push(0);
//   }
  
//   const newarr = []
//   for (i = 0; i < size; i++) {
//     newarr.push(arr[i]);
//   }
//     return newarr.join("")
// }
  
// console.log(stringy(5))