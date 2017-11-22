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
