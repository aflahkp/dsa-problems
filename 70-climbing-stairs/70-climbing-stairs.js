/**
 * @param {number} n
 * @return {number}
 */

var map = {};

var climbStairs = function(n) {
    
  if(n < 4){
      return n;
  }
    if(map[n]){
        return map[n];
    }
    else{
        map[n] = climbStairs(n-1)+ climbStairs(n-2);
        return map[n];
    }
};