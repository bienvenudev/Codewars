String.prototype.toAlternatingCase = function () {
  const splitWords = this.split('')
  const result = []
  splitWords.forEach((word) => {
      if (word === word.toUpperCase()) {
          result.push(word.toLowerCase())
      } else if (word === word.toLowerCase()) {
          result.push(word.toUpperCase())
      }
  })
  return result.join('')
}

// test should return 'HELLOaBcD'
console.log('helloAbCd'.toAlternatingCase())