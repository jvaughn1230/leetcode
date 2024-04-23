/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    
    const needleLength = needle.length;
    const hayLength = haystack.length;
    
    if (hayLength < needleLength) return -1;
    if (needleLength === 0) return -1;
    
    for(let i = 0; i <= hayLength - needleLength; i++){
        if(haystack.substring(i, i + needleLength) === needle){
            return i;
        }
    }
    
    return -1;
};