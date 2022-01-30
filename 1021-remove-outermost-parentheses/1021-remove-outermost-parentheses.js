/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  if(!s){
      return true;
  }
    const stack = [];
    var temp = [];
    var result = '';
    
    for(let i=0;i<s.length;i++){
        temp.push(s[i]);
        if(s[i] == "("){
         stack.push(i) 
        }
        else{
           if(stack.length == 1){
            if(stack.pop() < i-1){
                temp = temp.slice(1,temp.length-1);
                while(temp.length){
                    result+=temp.shift()
                }
            } else{temp = []}
                   
           }
            else{ stack.pop()  }
        }

    }
    return result
};