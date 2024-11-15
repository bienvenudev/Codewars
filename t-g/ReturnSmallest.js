// find the length of the smallest word in the string
const str = "this is the best";

// change str into array
const arr = str.split(" ");

// map through arr to get the length of each word
const num = arr.map((word) => word.length);

// print the number of the smallest word
console.log(Math.min(...num));
