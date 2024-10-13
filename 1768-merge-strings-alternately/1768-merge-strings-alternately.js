/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let mergedString = [];
    let i = 0;
    
    while ( i < word1.length && i< word2.length){
        mergedString.push(word1[i], word2[i]);
        i++;
    }
    
    if(i < word1.length){
        mergedString.push(word1.slice(i));
    }
    
    if(i < word2.length){
        mergedString.push(word2.slice(i));
    }
    
    return mergedString.join("");

};