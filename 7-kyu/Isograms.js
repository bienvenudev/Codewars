function isIsogram(str){
  // if empty == true
  // new array with string inside
  // loop through string
  // create a count
  // check if current includes in the new array and increment count if its > 2 then return false

  /// using a set and if the set !== to original then return false
  const lowerString = str.toLowerCase()
  const stringSet = new Set(lowerString)
  
  console.log(str.length == Array.from(stringSet).length);
  
}

// should return true
isIsogram("Dermatoglyphics")
// should return true
isIsogram("isogram")
// // should return false
isIsogram("aba")
// // should return false
isIsogram("moOse")