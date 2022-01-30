/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    var q = tickets;
    var left = tickets[k];
    var time = 0;
    while(left>0){
        for(var i = 0;i< q.length;i++){ 
            if(q[i] != 0){
                q[i] = q[i]-1;
                time++;
            }
            if(i==k){
                left--;
                if(left == 0){
                    break;
                }
            }
        }
    }
    return time;
};