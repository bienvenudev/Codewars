function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '')
}

// check if all vowels are removed
console.log(disemvowel("This website is for losers LOL!"))