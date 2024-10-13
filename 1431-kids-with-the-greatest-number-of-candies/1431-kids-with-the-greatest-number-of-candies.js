/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    let booleanArray = [];
    
    for(let i = 0; i < candies.length; i++){
        if (candies[i] + extraCandies >= max) {
      booleanArray.push(true);
    } else {
      booleanArray.push(false);
    }
    }
    
    return booleanArray
};