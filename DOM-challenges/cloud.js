const myParagraph = document.querySelector("#myParagraph").innerText;
// replace all symbols with empty
const cleanParagraph = myParagraph
  .replaceAll(".", "")
  .replaceAll(",", "")
  .replaceAll(":", "")
  .replaceAll(";", "")
  .replaceAll("\n", "");

// console.log("Whole para: ", myParagraph);

// console.log("-----");
// console.log("-----");
// console.log("-----");

// console.log("Clean para: ", cleanParagraph);

// split into array

// console.log(cleanParagraph.includes("\n"));

const paragraphArray = cleanParagraph.split(" ");
console.log(paragraphArray);
