// 1st approach using map
// create new array
// map through if number add to new array else do nothing

// function filter_list(l) {
//   const result = []
//   l.map((item) => {
//     if (typeof (item) === 'number') {
//       result.push(item)
//     }
//   })
//   return result
// }

// 2nd approach using filter
function filter_list(l) {
  const filtered = l.filter((item) => typeof item === "number");
  return filtered;
}

// should return [1,2]
console.log(filter_list([1, 2, "a", "b"]));
