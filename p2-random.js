/*
  CIT 281 Project 2
  Name: Jack Gose
*/


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // New: added getRandomLetter function
  function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[getRandomInteger(0, alphabet.length)];
  }
  
  // New: added getRandomString function
  // New: added getRandomString function
  function getRandomString(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength + 1);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += getRandomLetter();
    }
    return `${length} lowercase letters: ${result}`;
  }
  
  // New: added getSortedString function
  // New: added getSortedString function
  function getSortedString(string) {
    return string.split("").sort().join("");
  }
  
 
  console.log(getSortedString(getRandomString(10, 20)));
  