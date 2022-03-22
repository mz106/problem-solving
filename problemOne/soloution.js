const nums = [5, 4, 5, 1, 2, 1, 8, 4, 9, 8];

const sortedNums = nums.sort();

const noDuplicateArr = [];

for (let num of sortedNums) {
    if(noDuplicateArr.includes(sortedNums[num])) {
        //do nothing
    } else {
        noDuplicateArr.push(sortedNums[num])
    }
}

console.log(noDuplicateArr);