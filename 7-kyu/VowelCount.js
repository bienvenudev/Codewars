function getCount(str) {
  const arr = str.split("");
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "e" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

/* 2nd approach using 2 for loops
str = 'abracadabra i love you'
vowels = ['a', 'e', 'i', 'o', 'u']
vowelsCount = 0;

for(i=0; i<str.length; i++) {
    for(j=0; j<vowels.length; j++) {
        if(str[i] == vowels[j]) {
            vowelsCount++
        }
    }
} */
