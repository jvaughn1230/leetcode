/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let left = 0;
    let right = 0;
    window = new Set();
    let longest = 0;

    while(right < s.length){
        let letter = s[right];

        if(!window.has(letter)){
            window.add(letter);
            longest = Math.max(longest, window.size);
            right++;
        } else{
            window.delete(s[left]);
            left++
        }

    }

    return longest;
};