/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0;
    let initiated = false;
    for(c of s){
        if(!initiated){
            initiated = true;
        }
        balance+=(c == "L"?1:-1);
       if(initiated && balance==0){
            balance = 0;
            initiated = false;
            count++;
            continue;
        }
       
    }
    return count;
};