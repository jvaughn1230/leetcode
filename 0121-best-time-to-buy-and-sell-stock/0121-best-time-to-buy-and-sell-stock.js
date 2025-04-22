/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
   let minPrice = Infinity;
   let maxProfit = 0;

   for(let i = 0; i < prices.length; i++){
    const price = prices[i];

    if(price < minPrice){
        minPrice = price;
    } else{
         const profit = price - minPrice;
         maxProfit = Math.max(maxProfit, profit);
    }
    }
    return maxProfit;

};