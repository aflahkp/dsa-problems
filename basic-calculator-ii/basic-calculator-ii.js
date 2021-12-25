/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(str) {
    var numbers = [];
    var tempNumber = '';
    var operator = '+'
    var s = str.trim().split(' ').join('');
    var length = s.length;
    
    
    if(!s){
        return 0;
    }
    
    if(s.match(/^[0-9]+$/)){
       return parseFloat(s)
    }
    
    for(let i = 0; i<length; i++){
        if(!s[i].match(/[0-9]/g)){
            if(['*','/'].includes(operator)){
                var prev = numbers.pop();
                numbers.push(operator === '*'?(prev*tempNumber):parseInt(prev/tempNumber,10))
            }
            else{
                numbers.push(operator === '+'?tempNumber:(-1*tempNumber));    
            }
            operator = s[i];
            tempNumber = '';
        }
        else{
            tempNumber+=s[i];
            if(i=== length -1){
                if(['*','/'].includes(operator)){
                    var prev = numbers.pop();
                    numbers.push(operator === '*'?(prev*tempNumber):parseInt(prev/tempNumber,10))
                }
                else{
                    numbers.push(operator === '+'?tempNumber:(-1*tempNumber));  
                }
            }
        }
    }
    return numbers.reduce((acc,current) => acc+parseFloat(current),0)
};
