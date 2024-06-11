/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1
  return nums[0] * product(nums.slice(1));
}
console.log(product([1, 2, 3, 4]));

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: if the list is empty, return 0
  if (words.length === 0) return 0;

  // Recursive case: get the length of the first word
  const firstWordLength = words[0].length;

  // Recursively find the length of the longest word in the rest of the list
  const longestInRest = longest(words.slice(1));

  // Return the maximum of the two
  return Math.max(firstWordLength, longestInRest);
}
console.log(longest(['hi','good','friendly']))

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return str
  return str[0] + everyOther(str.slice(2))


}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string is empty or has one character, it's a palindrome
  if (str.length <= 1) {
      return true;
  }
  
  // Check the first and last characters
  if (str[0] !== str[str.length - 1]) {
      return false;
  }
  
  // Recursively check the substring excluding the first and last characters
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // Base case: if the array is empty, return -1
  if (arr.length === 0) return -1;
  

  // Check if the first element matches the value
  if (arr[0] === val) {
      return index;
  }

  // Recursive case: check the rest of the array
  return findIndex(arr.slice(1), val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return str
  return str.slice(-1) + revString(str.slice(0,-1))

}
console.log(revString("hello"));  // Output: "olleh"

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
