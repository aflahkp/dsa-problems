/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0){
        return [];
    }
    var combs = [];
    var keys = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"]
    }
    
    var prepareComb = (acc, curr) => {
        var digit = digits[curr];
        for(let c of keys[digit]){
            acc+=c;
            if(acc.length == digits.length){
                combs.push(acc)
            }
            else{
             prepareComb(acc,curr+1)   
            }
            acc = acc.slice(0,-1)
        }
    }
    
    prepareComb("",0)
    return combs;
    
    
};