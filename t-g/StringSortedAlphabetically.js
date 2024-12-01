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

const arrayA = a.split("");
const uniqA = [];
// using for loop to compare with previous
for (i = 0; i < arrayA.length; i++) {
  if (arrayA[i] !== arrayA[i + 1]) {
    uniqA.push(arrayA[i]);
  }
}

const arrayB = b.split("");
const uniqB = [];
// using for loop to compare with previous
for (i = 0; i < arrayB.length; i++) {
  if (arrayB[i] !== arrayB[i + 1]) {
    uniqB.push(arrayB[i]);
  }
}

console.log(uniqA);
console.log(uniqB);
