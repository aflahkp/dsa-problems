/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openings = {
        '{':1,
        '(':2,
        '[':3
    }
    
    const closings = {
        '}':1,
        ')':2,
        ']':3
    }
    
    const stack = [];
    
    for (c of s){
        if(openings[c]){
            stack.push(c)
        }
        else{
            if(closings[c]!=openings[stack.pop()]){
                return false;
            }
        }
    }
    return stack.length == 0;
    
};