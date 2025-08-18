/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [" "];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

const food = ["pizza", "cheeseburger",];

console.log('Exercise 2 result:', food);
//

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
const food01 =["pizza", "cheeseburger"];
const taco = "taco";

food01.unshift(taco);

console.log('Exercise 3 result:', food01);

//

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
//

 myFoods =["pizza", "cheeseburger"];
 {
    let favFood = myFoods[0];
console.log('Exercise 4 result:', favFood);
 };

//
/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
const foods0 = ["pizza", "cheeseburger"];
foods0.splice(1, 0, "tofu");

console.log('Exercise 5 result:', foods0);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

const foods1 = ["pizza", "cheeseburger", "tofu"];
// Find pizza
for (let i = 0; i < foods1.length; i++) {
    if (foods1[i] === "pizza") {
        // Change pizza into sushi and cupcakes
        foods1[i] = "sushi";
        //ADD cupcake after sushi
        foods1.splice(i + 1, 0, "cupcake");
        // Leave loop
        break; 
    }
}


console.log('Exercise 6 result:', foods1);


/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

let foods2 = ["sushi", "cupcake"];{
    // New array with sushi and cupcake
const yummy = foods2.slice;(0, 1);
// Print new array 
console.log('Exercise 7 result:', foods2);
// Equals sushi and cupcake
}

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const foods3 = ["sushi", "cupcake", "tofu"];
let soyIdx = foods3.indexOf('tofu');
// Print tofu
console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const foods4 = ["sushi", "cupcake", "tofu"];
// All foods
const allFoods = foods4.join(' -> ');

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/


const foods5 = ['sushsi', 'cupcake', 'tofu'];
let hasSoup = foods5.includes('soup');
// print soup
console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = [5, 15, 21, 7, 81, 45, 9];
// nums array odd 
for (let i = 0; i < nums.length; i++)
    if (nums[i] % 2 !== 0) {
        // Odd numbers only
        odds.push();
}

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const nums5 = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let fizz = []; 
    for (let i = 0; i <=100; i++) 
        if (i % 3 === 0);
    

//print fizz
return fizz;

    const buzz = [];
    // Loop buzz
for (let i = 0; i <= i; i++) {
if (i % 5 === 0);
}
// Print buzzz
return buzz;

function fizzbuzzArray = [];
// Loop fizz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0); 
}
// print fizzbuzz
return fizzbuzz;

// Print results
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 result:', numList);


/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
const numArrays1 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];
const num = numArrays1[3][0];

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
const numArrays1 =
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 8],
    
    let sum = 0;
    function sumNestedArrays(numArrays1) {
        arrays.forEach(numArrays1 => 
            numArray.forEach(num => 
                sumNestedArrays += num;
            )
        )
    }
console.log('Exercise 15 result:\n', total);
