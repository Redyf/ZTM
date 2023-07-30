// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function cleanRoom(inputArray) {
  // Separate numbers and strings from the inputArray
  const numbers = inputArray.filter((item) => typeof item === "number");
  const strings = inputArray.filter((item) => typeof item === "string");

  // Sort the numbers and strings arrays in ascending order
  numbers.sort((a, b) => a - b);
  strings.sort((a, b) => a - b);

  // Create an array to store the result
  const result = [];

  // Function to create individual arrays for repeating elements
  function createIndividualArray(arr) {
    let individualArray = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        individualArray.push(arr[i]);
      } else {
        result.push(
          individualArray.length === 1 ? individualArray[0] : individualArray
        );
        individualArray = [arr[i]];
      }
    }
    result.push(
      individualArray.length === 1 ? individualArray[0] : individualArray
    );
  }

  // Call the function to create individual arrays for numbers and strings
  createIndividualArray(numbers);
  createIndividualArray(strings);

  return result;
}

// Test cases
const inputArray1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
console.log(cleanRoom(inputArray1));

const inputArray2 = [1, "2", "3", 2];
console.log(cleanRoom(inputArray2));

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
