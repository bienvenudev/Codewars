function descendingOrder(n) {
  const string = [n].join("");
  const arrayOfString = string.split("");
  const arrayOfNum = arrayOfString.map((num) => Number(num));
  const sortedArray = arrayOfNum.sort((a, b) => b - a);

  return Number(sortedArray.join(""));
}

// should return  111
descendingOrder(111);
// should return 51
descendingOrder(15);
// should return 2110
descendingOrder(1021);
