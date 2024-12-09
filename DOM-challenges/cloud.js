const myParagraph = document.querySelector("#myParagraph").innerText;
const myWordCloud = document.querySelector("#myWordCloud");

// replace all symbols with empty and newline with space
const cleanParagraph = myParagraph
  .replaceAll(".", "")
  .replaceAll(",", "")
  .replaceAll(":", "")
  .replaceAll(";", "")
  .replaceAll("\n", " ");

// split paragraph string into an array using space
const paragraphArray = cleanParagraph.split(" ");
const unsortedObject = {};

for (let i = 0; i < paragraphArray.length; i++) {
  const currentWord = paragraphArray[i];

  // check if the current word is already in the object
  if (currentWord in unsortedObject) {
    unsortedObject[currentWord]++; // increment count if it exists
  } else {
    unsortedObject[currentWord] = 1; // initialize count to 1 if it doesn't exist
  }
}

const occurrenceArray = [];

// move properties and values to an array
for (let word in unsortedObject) {
  occurrenceArray.push([word, unsortedObject[word]]);
}

// sort the array
const sortedArray = occurrenceArray.sort((a, b) => b[1] - a[1]);
// extract 12 most occurrences(words and occurrence count)
const mostOccurrencesArray = sortedArray.slice(0, 12);
// retrieve 12 most occurring words (words only)
const mostOccurrences = mostOccurrencesArray.map((item) => item[0]);

let count = 64;
for (let i = 0; i < mostOccurrences.length; i++) {
  const currentWord = mostOccurrences[i];
  // word cloud with decrement font size (decrement by 4 pixels)
  myWordCloud.innerHTML += `<p class='paragraph${
    i + 1
  }' style="font-size:${count}px">${currentWord}</p>`;
  count -= 4;
}
