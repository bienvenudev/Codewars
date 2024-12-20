function getMiddle(s, y=0) {
  // if odd return the middle char
  // if even return the two middle chars
  // check if odd or even 
  /// if odd get the remainder round it and get the char on that index
  /// if even get the remainder + the next char
  
  const wordLength = s.length
  const modulo = s.length % 2

  if (modulo == 0) { // if even
    const remainder = wordLength / 2;
    console.log(s[remainder - 1] + s[remainder]);
  } else { // if odd
    const remainder = Math.round(wordLength / 2)
    console.log(s[remainder - 1]);
  }
  
}


// tests
getMiddle("test", "es");
getMiddle("testing", "t");
getMiddle("middle", "dd");
getMiddle("A", "A");
