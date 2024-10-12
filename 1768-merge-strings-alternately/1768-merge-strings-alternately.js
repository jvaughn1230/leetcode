/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let mergedString = [];
    
    for(let i=0; i < word1.length || i < word2.length; i++){
        if(i <= word1.length){
            mergedString.push(word1[i]);
        }
         if(i <= word2.length){
            mergedString.push(word2[i]);
        }
    }
    
    return mergedString.join('');
};