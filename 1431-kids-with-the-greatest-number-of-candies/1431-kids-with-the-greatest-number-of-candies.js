/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    let booleanArray = [];
    
    for(let i = 0; i < candies.length; i++){
        let kidsTotal = candies[i] + extraCandies
        let booleanValue = kidsTotal >= max;
        
        booleanArray.push(booleanValue)
    }
    
    return booleanArray
};