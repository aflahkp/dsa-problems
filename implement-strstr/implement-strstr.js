/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    const len = haystack.length;
    const needleLen = needle.length;
    
   var checkSequence = function(index){
        for(let j = 0;j<needleLen;j++){
            if(haystack[index+j] != needle[j]){
                return false;
            }
        }
        return true;
    }
    
        
    for(let i = 0; i< len; i++){
        if(haystack[i] == needle[0]){
            if(checkSequence(i)){
                return i;
            }
        }
    }
    return -1;
};