/*
  CIT 281 Project 1
  Name: Jack Gose
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const length = getRandomInteger(5, 26); // 5-25
  
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet[getRandomInteger(0, alphabet.length)];
  }
  
  console.log(`${length} lowercase letters: ${result}`);
  