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
const combinedString = a + b;
const arrayOfString = combinedString.split("");
const set = new Set(arrayOfString);
const arr = [...set];

console.log(arr.sort().join(""));
