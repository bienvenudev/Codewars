function getDrinkByProfession(param) {
  // 2nd approach using switch case
  const lowerCased = param.toLowerCase()
  switch (lowerCased) {
    case "jabroni": return "Patron Tequila"
    case "school counselor": return "Anything with Alcohol"
    case "programmer": return "Hipster Craft Beer"
    case "bike gang member": return "Moonshine"
    case "politician": return "Your tax dollars"
    case "rapper": return "Cristal"
    default: return "Beer"
  }
}
  // 1st approach: if else
  // transform all into lowercase
  // const lowerCased = param.toLowerCase();
  // if (lowerCased === "jabroni") {
  //   return "Patron Tequila";
  // } else if (lowerCased === "school counselor") {
  //   return "Anything with Alcohol";
  // } else if (lowerCased === "programmer") {
  //   return "Hipster Craft Beer";
  // } else if (lowerCased === "bike gang member") {
  //   return "Moonshine";
  // } else if (lowerCased === "politician") {
  //   return "Your tax dollars";
  // } else if (lowerCased === "rapper") {
  //   return "Cristal";
  // } else {
  //   return "Beer";
  // }

// test should print Patron Tequila
console.log(getDrinkByProfession("JabRoni"));
