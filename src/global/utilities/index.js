//The place for General-purpose functions
// feel free to add functions that seem short or are single-line directly into this file.
// also feel free to add big fat complex functions into their own file
//happy hacking

// ------ All exports from other files go here:



// ------ all exports from this file start here (be sure to comment what they do) PS: have a happy hacking!

//Creates a random ID that is always unique
export const generateID = () => '_' + Math.random().toString(36).substr(2,9);

//Converts Normal Strings to kebab-case
export const stringToKebab = (string) => string.split(" ").join("-").toLowerCase();

//Returns a random element from an array
export const returnRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

//Pascal to Kebab Case
export const pascalToKebab=(str)=>str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
  