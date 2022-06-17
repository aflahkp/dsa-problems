/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0;
    let maxLen = 1;
    let map = new Map();
    map.set(s[0],0)
    
    let l = 0;
    let r = 1;
    
    while(r<s.length){
        let char = s[r];
        if(map.has(char)){
            l=Math.max(l,map.get(char)+1);
            // console.log(l,r,map,char)
        }
        maxLen = Math.max(maxLen,r-l+1)
        // console.log(l,r,maxLen,map)
        map.set(char,r)
        r++;
        
    }
    
    return maxLen;
    
};