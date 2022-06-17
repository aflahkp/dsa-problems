/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    if(s.length == 1) return 1;
    let maxLen = 1;
    let map = new Map();
    map.set(s[0],0)
    
    let l = 0;
    let r = 1;
    
    while(r<s.length){
        let char = s[r];
        if(map.has(char)){
            l=Math.max(l,map.get(char)+1);
        }
        maxLen = Math.max(maxLen,r-l+1)
        map.set(char,r)
        r++;
        
    }
    
    return maxLen;
    
};