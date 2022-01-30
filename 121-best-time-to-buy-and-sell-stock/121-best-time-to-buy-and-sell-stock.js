/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = Number.NEGATIVE_INFINITY;
    const len = prices.length;
    var i = 1;
    var prev = prices[0];
    
    
    while(i<len){
        const current = prices[i];
        if(current -prev >maxProfit){
            maxProfit = current-prev;
        }
        if(prev>current){
            prev = current;
        }
        i++;
    }
    return maxProfit>0?maxProfit:0;
};