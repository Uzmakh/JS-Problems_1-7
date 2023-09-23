// CodeSignal Js Problems_1-7


// add
// Write a function that returns the sum of two numbers.
function solution(param1, param2) {
    return (param1 + param2)
}
solution(2, 5)

// centuryFromYear
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function solution(year) {
    return Math.floor((year - 1) / 100) + 1;
}
solution(1905);

// checkPalindrome
// Given the string, check if it is a palindrome.
function solution(inputString) {
    return inputString.split('').reverse().join('') === inputString;
}

// adjacentElementsProduct
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//Function for adjacent elements product
function solution(inputArray) {
    // Using map method
    /*
     const a = inputArray
     const x = a.map((value,index) => value*a[index+1] )
     const z = x.slice(0, -1)
     console.log(x)
     console.log(z)
     return Math.max(...z)
     */

    // Using map method(short-notation)
    return Math.max(...inputArray.slice(0, -1).map((value, index) => value * inputArray[index + 1]))


    /*
   //   Using Loop method
      const newArray = [];
     for(let i=0; i<inputArray.length - 1; i++){
        const x = inputArray[i]* inputArray[i+1];
        newArray.push(x);
     }
     console.log(newArray);
     console.log(...newArray);
     return Math.max(...newArray);
     */


    //   return newArray.reduce((currentValue,newValue)=>{
    //     return Math.max(currentValue,newValue)
}


// shapeArea
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
function solution(n) {
    let area = 1;
    for (let i = 1; i <= n; i++) {
        const x = (4 * i) - 4;
        area += +x
    }
    return area
}

// Make Array Consecutive 2
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
function solution(statues) {
    const sorted = statues.sort((a, b) => a - b);
    console.log(sorted);
    let counter = 0;
    for (let i = 0; i < statues.length - 1; i++) {
        if (statues[i + 1] - statues[i] !== 1) {
            let missingStatues = 0;
            missingStatues = statues[i + 1] - statues[i] - 1;
            console.log(missingStatues);
            counter += +missingStatues;
        }
    }
    return counter;
}

// almostIncreasingSequence
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
function solution(sequence) {
    let counter = 0;
    const s = sequence;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] >= s[i]) {
            counter++
            if (counter > 1) return false;
            if (s[i - 2] >= s[i] && s[i - 1] >= s[i + 1]) return false;
        }
    }
    return true;
}
