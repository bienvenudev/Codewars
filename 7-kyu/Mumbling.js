function accum(s) {
  // turn into uppercase
  // split into array
  //

  const upper = s.toUpperCase().split("");
  const resultArr = []
  for (let i = 0; i < upper.length; i++) {
    const currentWord = upper[i];
    const repeated = currentWord.toLowerCase().repeat(i)
    resultArr.push(currentWord + repeated);
  }
  console.log(resultArr.join('-'));
  
}

// tests
accum("ZpglnRxqenU"); // should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// accum("NyffsGeyylB");
// accum("MjtkuBovqrU");
// accum("EvidjUnokmM");
// accum("HbideVbxncC");
