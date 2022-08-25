/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

// using reduce 
const reduceArray = [1, 9, 17, 22];
const testReduce = reduceArray.reduce((n, f) => n + f, 0)
console.log(testReduce)


// using for loop 
const loopReduce = loopInp => {
    let sum = 0;
    for (const i of loopInp) {
        sum = sum + i
    }
    return sum;
}
console.log(loopReduce(reduceArray))