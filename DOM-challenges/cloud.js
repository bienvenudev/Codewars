const myParagraph = document.querySelector("#myParagraph").innerText;
const myWordCloud = document.querySelector("#myWordCloud");
// replace all symbols with empty
const cleanParagraph = myParagraph
  .replaceAll(".", "")
  .replaceAll(",", "")
  .replaceAll(":", "")
  .replaceAll(";", "")
  .replaceAll("\n", " ");

// console.log("Whole para: ", myParagraph);

// console.log("-----");
// console.log("-----");
// console.log("-----");

// console.log("Clean para: ", cleanParagraph);

// split into array

// console.log(cleanParagraph.includes("\n"));

const paragraphArray = cleanParagraph.split(" ");
const unsortedObject = {};

for (let i = 0; i < paragraphArray.length; i++) {
  const currentWord = paragraphArray[i];

  if (currentWord in unsortedObject) {
    unsortedObject[currentWord]++;
  } else {
    unsortedObject[currentWord] = 1;
  }
}

// console.log(unsortedObject);

const occurrenceArray = [];

// move properties and values to an array
for (let word in unsortedObject) {
  occurrenceArray.push([word, unsortedObject[word]]);
}

// sort the array
const sortedArray = occurrenceArray.sort((a, b) => b[1] - a[1]);
// extract 12 most occurrences
const mostOccurrencesArray = sortedArray.slice(0, 12);
// retrieve 12 most occurring words
const mostOccurrences = mostOccurrencesArray.map((item) => item[0]);

console.log(mostOccurrences);

// myWordCloud.textContent = mostOccurrences;
