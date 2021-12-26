/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(str) {
    var result = 0;
    var lastNumber = 0;
    var tempNumber = 0;
    var operator = '+'
    const s = str.trim().split(' ').join('');
    const length = s.length;
    
    
    if(!s){
        return 0;
    }
    
    if(s.match(/^[0-9]+$/)){
       return parseFloat(s)
    }
    
    for(let i = 0; i<length; i++){
        if(s[i].match(/[0-9]/g)){
            tempNumber = tempNumber*10 + parseFloat(s[i]);
        }
       if(!s[i].match(/[0-9]/g) || i == length -1){
            if(['*','/'].includes(operator)){
               lastNumber = operator === '*' ? lastNumber*tempNumber : parseInt(lastNumber/tempNumber,10)
            }
            else{
                result += lastNumber
                    lastNumber = operator === '+'?(tempNumber):(-1 * tempNumber);
            }
            operator = s[i]
            tempNumber = 0;
        }
    }
    result+=lastNumber;
    return result;
};
