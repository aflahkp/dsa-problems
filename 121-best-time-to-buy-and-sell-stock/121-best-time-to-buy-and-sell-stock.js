/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var min = Number.POSITIVE_INFINITY;
    
    for(let price of prices){
        min = Math.min(min,price);
        maxProfit = Math.max(maxProfit, price-min)
    }
    
    return maxProfit;
};