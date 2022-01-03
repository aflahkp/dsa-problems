/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let max = Math.max(word1.length,word2.length)
    let w1 ="";
    let w2 = "";
    
    for(let i=0; i< max;i++){
        if(word1[i]) w1+=word1[i];
        if(word2[i]) w2+=word2[i];
    }
    return w1 == w2;
};