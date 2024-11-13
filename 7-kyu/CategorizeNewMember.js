function openOrSenior(data) {
  let result = [];
  data.forEach((person) => {
    age = person[0];
    handi = person[1];
    if (age >= 55 && handi > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });
  return result;
}

// test should output = [ 'Open', 'Senior', 'Open', 'Senior' ]
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
