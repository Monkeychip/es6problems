 /** @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}

 There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

 */
const nums1 = [1, 2]
const nums2 = [3, 4]

const findMedianSortedArrays = (nums1, nums2) => {
    let totalLength = (nums1.length + nums2.length) / 2; 
    let mergedArray = [...nums1, ...nums2]; 
    let sortMergedArray = mergedArray.sort();
   
    if((totalLength % 1) !== 0){
        let index = mergedArray[Math.round(totalLength) - 1] ; //2
        return index;
    }else{ 
     return mergedArray[totalLength];
    }
};

/*
flipping binary Input: 1
- Output: 0
- Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/
let findComplement = (num) => {
    let string = num.toString(2);
    let mapObj = {
        0 : "1",
        1 : "0"
    };
    let stringFlipped = string.replace(/0|1/g, (matched) => mapObj[matched]) //010
    return parseInt(stringFlipped,2);  
};

/**
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = (words) => {
    let row1 = 'QWERTYUIOPqwertyuiop';
    let row2 = 'ASDFGHJKLasdfghjkl';
    let row3 = 'ZXCVBNMzxcvbnm';
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let finalArray = [];
    
    for(let value of words){
        let smallArray = value.split("");
        if(smallArray.filter( (letter) => row1.indexOf(letter) > -1 ).join("") == value){ finalArray.push(value)}; 
        if(smallArray.filter( (letter) => row2.indexOf(letter) > -1 ).join("") === value){finalArray.push(value)};
        if(smallArray.filter( (letter) => row3.indexOf(letter) > -1 ).join("") === value){finalArray.push(value)};
    };
    return finalArray;
};

/*Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.*/

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = (s) => {
  
    let arr = s.split(" ");
    let newArray = [];
    
    for (let value of arr) {
       let test = value.split("").reverse().join("");   
        newArray.push(test);
    }
    return newArray.join(" ");
    
};


/*********
Given an integer array with even length, where different numbers in this array represent different kinds
of candies. Each number means one candy of the corresponding kind. You need to distribute these candies 
equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.
*****/

let distributeCandies = candies => {
    //using spread and new Object methods
let uniqueValues = [...new Set(candies) ];

    let numberOfCandies = candies.length;    
    let numberOfCandiesHalf = numberOfCandies / 2;

    if(uniqueValues.length <= numberOfCandiesHalf){ //[1,1,1,1,2,2,2,3,3,3]// 10 vs 3
        return uniqueValues.length;
    }else{ //[1,1,2,3] //3 vs 2
        return numberOfCandiesHalf;
    }
};

/*******
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
***/
let fizzBuzz = (n) => {
let numberArray = [];
    //Created new array, tried using on ES6 array methods, but I wasn't manipulating an array, I was creating a whole new one.
    for(var i = 1; i <=n; i++){
        let numberUnitThree = Number.isInteger(i / 3);
        let numberUnitFive = Number.isInteger(i / 5);
        
        if(numberUnitThree === true && numberUnitFive === true){
            numberArray.push("FizzBuzz");
        }else if(numberUnitThree === true){
            numberArray.push("Fizz");
        }else if(numberUnitFive === true){
            numberArray.push("Buzz");
        }else{
            numberArray.push(i.toString());
        }
    
    };
    return numberArray;
};


/********
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
***/


let matrixReshape = (nums, r, c) => {
               
    let numbOfColumnsOldMatrix = nums.reduce((sum, number) => number.length, 0) //2 columns
    let spotsOldMatrix = numbOfColumnsOldMatrix * nums.length; //nums.length is number of rows
    let spotsNewMatrix = r*c;
    let stringArray = [];
    let findingNumbers = nums.forEach((column)=>{ //[1,2,3,4]
       column.forEach((value) => stringArray.push(value)) 
    });      
        
    if(spotsNewMatrix === spotsOldMatrix){
        let newMatrix = [];
        for(var i=0; i < r; i++){ 
            newMatrix.push([]);
            //now in each column, loop through and add the rows
            for(var e=0; e < c; e++){ 
                newMatrix[i].push(stringArray[e]); 
            };
            //return array missing the ones already inserted into the first row
            stringArray.splice(0,c);
        };
        return newMatrix;
        
    }else{
       return nums;//return original matrix
    }

};                  
    
    
/*
Used filter method to return the non duplicate in the array - there was always just one non duplicate
*/
//ex[2,2,1,1,3] return 3
let singleNumber = (nums) => {
    let duplicate = nums.filter((number,index,array) => array.indexOf(number) !== index); //filter callback excepts element, index, array
    let result = nums.filter((num) => {
        return duplicate.indexOf(num) === -1; 
    });
    return result[0];
};
    
