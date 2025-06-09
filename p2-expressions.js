/*
  CIT 281 Project 2
  Name: Jack Gose
*/


const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  // New: added getRandomLetter function
  const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[getRandomInteger(0, alphabet.length)];
  };
  
  // New: added getRandomString function
  const getRandomString = function(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength + 1);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += getRandomLetter();
    }
    return `${length} lowercase letters: ${result}`;
  };
  
  // New: added getSortedString function
  const getSortedString = function(string) {
    return string.split("").sort().join("");
  };
  
  
  console.log(getSortedString(getRandomString(10, 20)));
  