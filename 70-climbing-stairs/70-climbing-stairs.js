/**
 * @param {number} n
 * @return {number}
 */

var map = {};

var climbStairs = function(n) {
    
  if(n == 1){
      return 1;
  }
  if(n == 2){
      return 2;
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