// convert miles per imperial gallon (mpg) into kilometers per liter (kpl).
//Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// 1 gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

function converter(mpg) {
  const kpg = mpg * 1.609344;
  const kpl = kpg / 4.54609188;
  return Number(kpl.toFixed(2));
}

// test should return 3.54
console.log(converter(10));
