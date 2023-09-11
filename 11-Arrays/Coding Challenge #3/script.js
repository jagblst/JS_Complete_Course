'use strict';

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = (ages) => {
    // 1.
    const humanAge = ages.map(age => age <= 2 ? age * 2 : age * 4 + 16);
    console.log(humanAge);

    // 2.
    const adultDogs = humanAge.filter(age => age >= 18);
    console.log(adultDogs);

    // 3.
    const averageAdultsAge = adultDogs.reduce((acc, cur) => acc + cur) / adultDogs.length;
    console.log(averageAdultsAge);
}
*/

const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? age * 2 : age * 4 + 16).filter(age => age >= 18).reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(`===================================`);
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));