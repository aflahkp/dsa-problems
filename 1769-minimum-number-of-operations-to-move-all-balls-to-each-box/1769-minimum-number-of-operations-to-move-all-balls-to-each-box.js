/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    var result = Array(boxes.length).fill(0);
    var boxesWithBalls = [];
    for(let i = 0; i<boxes.length;i++){
        if(boxes[i] == 1){
            boxesWithBalls.push(i)
        }
    }
    for(let i = 0; i<boxes.length; i++){
        result[i] += boxesWithBalls.reduce((acc,current) => acc + Math.abs(current - i), 0)
    }
     
    return result;
};