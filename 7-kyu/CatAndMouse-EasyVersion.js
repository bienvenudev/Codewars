function catMouse(x) {
  function catMouse(x){
    if (x[0] === 'C' && x[1] === 'm' ||
        x[1] === "." && x[2] === 'm' ||
        x[1] === '.' && x[2] === '.' && x[3] === "m" ||
        x[1] === '.' && x[2] === '.' && x[3] === '.' && x[4] === 'm') {
       return "Caught!";
     } else {
       return "Escaped!";
     }
   }
}

// should return "Escaped!"
console.log(catMouse("C....m"));
// should return "Caught!"
catMouse("C...m");
