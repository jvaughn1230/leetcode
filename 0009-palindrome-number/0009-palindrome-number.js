/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
     let stringNumber = x.toString();
  
  if (stringNumber.length === 1) return true
    
  let reverseString = stringNumber.split("").reverse().join("")
  
  if (stringNumber === reverseString) return true
  return false
};