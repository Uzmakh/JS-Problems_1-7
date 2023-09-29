/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/
function adjacentElementsProduct(inputArray) {
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
}


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
