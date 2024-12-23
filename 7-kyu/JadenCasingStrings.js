String.prototype.toJadenCase = function () {
  const lower = this.toLowerCase().split(' ');
  const result = [];
  lower.forEach((word) => {
    result.push(word[0].toUpperCase() + word.slice(1, word.length));
  });
  console.log(result.join(" "));
};

// test
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real");
