/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    var i = 0;
    var stack = [];
    while(i<s.length){
        if(stack.slice(-1) == s[i]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
        i++;
    }
    return stack.join('');
};