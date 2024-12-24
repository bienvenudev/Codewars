function accum(s) {
  return s
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join("-");
}

// tests
console.log(accum("ZpglnRxqenU")); // should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// accum("NyffsGeyylB");
// accum("MjtkuBovqrU");
// accum("EvidjUnokmM");
// accum("HbideVbxncC");
