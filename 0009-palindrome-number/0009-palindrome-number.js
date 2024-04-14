/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x.toString() === x.toString().split('') .reverse().join('')) return true;
    
    return false
    
}   