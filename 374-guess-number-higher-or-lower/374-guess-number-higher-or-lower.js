/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var start = 0;
    var end = n;
    while(start<=end){
        var current = Math.ceil((start + end)/2);
        var guessResult = guess(current)
        if(guessResult == 0){
            return current;
        }
        else if(guessResult == 1){
            start = current;
        }
        else{
            end = current;
        }
    }
};