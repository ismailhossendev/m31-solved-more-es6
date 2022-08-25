/*
    1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number.

    2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
    return/get all the elements which are divisible by 10 using
    array.filter() method.

    3) Now do the same task of question 2. But do this using array.find()
    method. Then compare the output of question 2 & question 3. 
*/
/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number. */
const oddArr = [1, 3, 5, 7, 9];
//using for loop 
const evenConvert = arrInp => {
    let newEven = []
    for (let i of arrInp) {
        newEven.push(i+1)
    }
    return newEven
}
// console.log(evenConvert(oddArr))

// array.map method 
const newEven = oddArr.map(n => n + 1);
// console.log(newEven)


/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
    return/get all the elements which are divisible by 10 using
    array.filter() method. */

const divisibleArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleArr = divisibleArray.filter(n => (n % 2 == 0))
console.log(divisibleArr)


/*
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.  
*/
const divisibleArray3 = [33, 50, 79, 78, 90, 101, 30];
const divisibleArr3 = divisibleArray3.find(n => (n % 2 == 0))
console.log(divisibleArr3)