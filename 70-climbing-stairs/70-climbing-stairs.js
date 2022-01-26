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
        const solution = climbStairs(n-1)+ climbStairs(n-2);
        map[n] = solution;
        return solution;
    }
};