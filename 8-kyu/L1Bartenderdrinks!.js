function getDrinkByProfession(param) {
  // 1st approach: if else
  // transform all into lowercase
  const lowerCased = param.toLowerCase();
  if (lowerCased === "jabroni") {
    return "Patron Tequila";
  } else if (lowerCased === "school counselor") {
    return "Anything with Alcohol";
  } else if (lowerCased === "programmer") {
    return "Hipster Craft Beer";
  } else if (lowerCased === "bike gang member") {
    return "Moonshine";
  } else if (lowerCased === "politician") {
    return "Your tax dollars";
  } else if (lowerCased === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}

// test should print Patron Tequila
console.log(getDrinkByProfession("Jabroni"));
