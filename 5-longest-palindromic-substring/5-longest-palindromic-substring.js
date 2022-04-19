/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxLength = 1;
    var start = 0;
    var end = 0;
    var l = s.length;
    var startOfLargest = 0;
    
    if(s.length == 1){
        return s;
    }
    
    if(s.length == 2){
        return s[0] == s[1]?s:s[0];
    }
    
    
    
    var checkOddSubstrings = (index,start,end,length) => {
        // var current = index;
        // var start = st;
        // var end = en
        // var length = l;
        while(start>=0 && end<l){
            if(s[start]==s[end]){
                if((end - start +1) > maxLength){
                    startOfLargest = start
                    maxLength = (end - start +1);
                }
            }
            else{
                break;
            }
            start--;
            end++
        }
    }
    for(let i = 0; i<l;i++){
        checkOddSubstrings(i,i-1,i+1,1);
        checkOddSubstrings(i,i,i+1,2);
    }
    
    return s.substring(startOfLargest,startOfLargest+maxLength);
    
};