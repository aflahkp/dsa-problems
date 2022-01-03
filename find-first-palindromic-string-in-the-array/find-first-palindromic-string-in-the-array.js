/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    var len = words.length;
    
    for(let i=0;i<len;i++){
        let w = words[i];
        let wl = w.length;
        let wi = 0;
        while(wi<wl/2){
            if(w[wi] != w[wl-wi-1]){
                break;
            }
            wi++;
        }
        if(wi > ((wl/2)-1)){
            return w;
        }
    }
    return '';
    
};
