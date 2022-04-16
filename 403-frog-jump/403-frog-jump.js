/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let k = 1;
    let len = stones.length -1;
    let last = stones.slice(-1);
    
    
    if(stones[1] != 1) return false;
    
    let dp = {
        0: true,
        1: true,
    };
    
    
    var isJumpable = (index, k) => {
        let current = stones[index]
        if(stones[index] == last){
            return true;
        }
        
        if(stones[index+1] && index>1 && stones[index+1] > 2* stones[index]) {
            return false;
        }
        
        if(dp[`${index},${k}`]){
            return false;
        }
        
        let tempIndex = index+1;
        
        while(stones[tempIndex] <= current+k+1){
            if(stones[index+1]> current+k+1){
                return false;
            }
            if(stones[tempIndex] == current+k-1 && (k-1)>0){
                if(isJumpable(tempIndex, k-1)) return true;
            } else if(stones[tempIndex] == current+k){
                if(isJumpable(tempIndex, k)) return true;
            } else if(stones[tempIndex] == current+k+1){
                if(isJumpable(tempIndex, k+1)) return true;
            }
            tempIndex++;
        }
        dp[`${index},${k}`] = true;
        return false;
    }
        
    return isJumpable(1,1);
    
    // return false;
};