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

// using Set
/* 
const combinedString = a + b;
const arrayOfString = combinedString.split("");
const set = new Set(arrayOfString);
const arr = [...set];

console.log(arr.sort().join(""));
*/

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

// using .includes
const arrayA = a.split("");
const uniqueA = [];

for (let i = 0; i < arrayA.length; i++) {
  if (!uniqueA.includes(arrayA[i])) {
    uniqueA.push(arrayA[i]);
  }
}

const arrayB = b.split("");
const uniqueB = [];

for (let i = 0; i < arrayB.length; i++) {
  if (!uniqueB.includes(arrayB[i])) {
    uniqueB.push(arrayB[i]);
  }
}

const combinedArray = uniqueA.concat(uniqueB);
const uniqueArray = [];

for (let i = 0; i < combinedArray.length; i++) {
  if (!uniqueArray.includes(combinedArray[i])) {
    uniqueArray.push(combinedArray[i]);
  }
}

console.log(uniqueArray.sort().join(''));
