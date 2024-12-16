function reverseWords(str) {
  return str.split("").reverse().join('').split(' ').reverse().join(' ');
}

// should return 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));


