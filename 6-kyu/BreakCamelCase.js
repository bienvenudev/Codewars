function solution(string) {
  const splittedString = string.split("");
  const newArr = [...splittedString];

  for (i = 0; i < splittedString.length; i++) {
    if (splittedString[i] == splittedString[i].toUpperCase()) {
      // console.log('found uppercase: ' + splittedString[i])
      const index = i;
      newArr.splice(index + (newArr.length - splittedString.length), 0, " ");
    }
  }
  return newArr.join("");
}

// should return 'hello There Bob'
solution("helloThereBob");
