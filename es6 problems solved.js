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

//flipping binary Input: 1
//Output: 0
//Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
let findComplement = (num) => {
    let string = num.toString(2);
    let mapObj = {
        0 : "1",
        1 : "0"
    };
    let stringFlipped = string.replace(/0|1/g, (matched) => mapObj[matched]) //010
    return parseInt(stringFlipped,2);  
};