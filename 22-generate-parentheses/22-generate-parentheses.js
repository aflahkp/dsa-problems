/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let maxLen = 2 * n;
    let combs = [];
    
    var insert = (curr,left,right) => {
        if(curr.length === maxLen) combs.push(curr);
        if(left<n) insert( curr + "(",left+1,right);
        if(right<left) insert(curr += ")",left,right+1);
    }
    
    insert("",0,0)
    return combs;
};