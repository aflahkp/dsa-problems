/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1){
        return x
    }
    
    var start = 0;
    var end = x
    
    while(start<= end){
        var pointer = Math.floor((start + end)/2);
        var square = pointer * pointer;
        var adjSquare = (pointer+1) * (pointer+1);
        
        if(square == x){
            return pointer;
        }
        else if(square < x){
            if(x < adjSquare){
               return pointer
            }
            start = pointer
        }
        else{
            end = pointer
        }
    }
};