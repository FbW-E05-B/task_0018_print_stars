// pb - 18 - Write a function named printStars that behave like follows:-
// printStars(3); (edited) 


// ***
// **
// * (edited) 


// *****
// ****
// ***
// **
// *


let starSequence = [];

for (s = 1; s <= 3; s++) {
  for (t = 0; t <= 2; t++) {
    starSequence.push("*");
    starSequence = [];
  }

}


console.log(starSequence);




// function printStars(times) {

//   let arr = [];

//   for (let i = 0; i <= 5; i++) {
//     for (let k = times; k > i; k++) {
//       arr.push("*");
//       console.log(arr);

//     }

//     return arr

//   }

// }

// console.log(arr.join(" "));
// arr = [];


// printStars(3)


const array = ["Anne", "Bob", "Charlie", "Donna", "elvis"]


function longestWord(arrayOfStrings) {

  let maxLength = 0;

  let longWord = "";

  for (let ii = 0; ii < array.length; ii++) {
    const string = arrayOfStrings[ii]
    const newMax = compareStringLengths(string, maxLength)

    if (newMax) { // 4 is truthy
      maxLength = newMax
      longWord = string
    }
  }

  return [maxLength, longWord]

  // end of the longest word function

}


function compareStringLengths(string, maxLength) {
  return (maxLength < string.length) ?
    string.length :
    0
}

let result = longestWord(array);

console.log(result);