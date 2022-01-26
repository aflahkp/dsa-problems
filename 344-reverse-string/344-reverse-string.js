/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length -1;
    
    for(let i = 0; start<=end; start++,end--){
        [s[start],s[end]] = [s[end],s[start]]
    }
    
    return s;
};