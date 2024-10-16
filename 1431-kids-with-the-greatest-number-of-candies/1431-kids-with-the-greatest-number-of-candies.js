/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const most = Math.max(...candies);
    const result = [];
    
    candies.forEach((candy) => {
        const newTotal = candy + extraCandies;
        
        const isMost = newTotal >= most;
        
        result.push(isMost);
    })
    
    return result;
};