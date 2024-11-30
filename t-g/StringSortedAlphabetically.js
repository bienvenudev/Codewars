/* 
Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string(alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

const array = a.split("");
const newArr = [];
// using for loop to compare with previous
for (i = 0; i < array.length; i++) {
  if (array[i] !== array[i + 1]) {
    newArr.push(array[i]);
  }
}

// using foreach
array.forEach((word, index, array) => {
  if (word === array[i - 1]) {
    newArr.push(array[i]);
  }
});
