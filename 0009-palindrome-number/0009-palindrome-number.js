/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    const y = x.toString();
    const z = x.toString().split('') .reverse().join('');
    
    if (y === z) return true
    
    return false
    
}   