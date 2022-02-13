/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let buyPrice = prices[0]
    let profit = 0;
    
    for(let i = 1;i<n;i++ ){
        let p = prices[i];
        if(p - buyPrice > 0){
            profit+=(p - buyPrice);
            buyPrice = p;
        }else{
            buyPrice = p;
        }
    }
    return profit;
    
};