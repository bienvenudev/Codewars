/**
 * The current spoons the Spoon Central CEO has in the
 * Spoon Central warehouse. And by warehouse I mean
 * the spoons they have at home.
 */

const spoonInventory = [
  "Tiny Spoon",
  "Spoon of Destiny",
  "Rusty Spoon",
  "Mega Spoon 5000",
  "Mega Spoon 5000",
  "Plastic Spoon",
  "Wooden Spoon",
  "Rusty Spoon",
  "Mega Spoon 5000",
  "Ultra Spoon Pro Max 11",
  "Tiny Spoon",
  "Rusty Spoon",
  "Mega Spoon 5000",
  "Mega Spoon 5000",
  "Plastic Spoon",
  "Ultra Spoon Pro Max 11",
];

/** A function for counting spoons. Wow. */
function countSpoons() {
  // store all spoons in an object
  const allSpoons = {};
  // for loop through spoons
  for (let i = 0; i < spoonInventory.length; i++) {
    const currentSpoon = spoonInventory[i];
    
    // Check if the spoon is already in the object
    if (currentSpoon in allSpoons) {
      allSpoons[currentSpoon]++; // Increment count if it exists
    } else {
      allSpoons[currentSpoon] = 1; // Initialize count to 1 if it doesn't exist
    }
  }
  return allSpoons;
  
}

console.log(countSpoons());