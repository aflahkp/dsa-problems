/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str = s.split('')
    let len = s.length;
    let vowIndices = [];
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    
    
    for(let i = 0; i< len;i++){
        if(vowels.has(str[i])){
            vowIndices.push(i);
        }
    }
    
    let left = 0;
    let right = vowIndices.length -1;
    
    while(left<right){
        var temp = str[vowIndices[left]];
        str[vowIndices[left]] = str[vowIndices[right]]
        str[vowIndices[right]] = temp;
        left++;
        right--;
    }
    return str.join('')
};