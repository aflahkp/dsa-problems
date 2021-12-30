/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    var rev = 0;
    
    
    for(let i =x; i>=1; i=Math.floor(i/10)){
        rev = (10* rev) + i%10
    }
    
    console.log(rev)

    return rev === x;
};