//There is a list of numbers (single digits).
//Put them in order and remove duplicates

// the list - 5, 4, 5, 1, 2, 1, 8, 4, 9, 8

//What is the problem?
// There is a list of numbers out of order with duplicates.

//What do you want to achieve?
// I want to sort the list of numbers and remove any duplicate numbers

//Can you be more specific?
// The list is unordered. it will have to be in the form of an array. 
// There are duplicate numbers that will have to be removed. 
// Order of sorting - assume ascending - questio isn't specific.

//What can you infer?
// The numbers will have to be put into an array
// They could be sorted first, or the duplicates could be removed first. 
// They don't need to be sorted before duplicates can be removed, 
// but it will probably be more efficient to sort them first. 
// There are two distinct parts to this soloution; sorting and removing.
// 

//What tools do you think that you'll need?
// An array(s)
// A loop(s)
// Javascript array methods

//What is your first step?
// Put the numbers into an array

const nums = [5, 4, 5, 1, 2, 1, 8, 4, 9, 8];

//What is your second step?
// Sort the numbers into ascending order

const sortedNums = nums.sort();

//What is your third step?
// log sortednums to test

// console.log(sortedNums);

// What is your fourth step?
// loop over sortedNums to check for duplicates

// for (let num in sortedNums) {

// }

//But what are we checking for? How are we checking? We need to return an 
//array of numbers without duplicates. So, what is the next step?

//What is your fifth step?
// Create an array to add numbers to

const noDuplicateArr = [];

//What is you fifth step?
// Loop over newNums and and add to noDuplicateArr
// for (let num in sortedNums) {
//     noDuplicateArr.push(sortedNums[num]);
// }

// console.log(noDuplicateArr);

//This returns the same array as newNums. What should I do to check
//for duplicates?

//What is your sixth step?
// Add a if block to the loop to check if there are duplicates

for (let num of sortedNums) {
    if(noDuplicateArr.includes(sortedNums[num])) {
        //do nothing
    } else {
        noDuplicateArr.push(sortedNums[num])
    }
}

console.log(noDuplicateArr);

