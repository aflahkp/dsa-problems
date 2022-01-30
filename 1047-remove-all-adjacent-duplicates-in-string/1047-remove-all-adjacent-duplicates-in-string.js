/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    var i = 0;
    var stack = [];
    for(let i of s){
        if(stack.slice(-1) == i){
            stack.pop()
        }
        else{
            stack.push(i)
        }
        i++;
    }
    return stack.join('');
};