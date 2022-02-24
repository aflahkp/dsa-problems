/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var distance = 0;
    let len = nums.length;
    let l = 0;
    let r = 0;
    
    while(r<len-1){
        let farthest = 0;
        for(let i=l;i<=r; i++){
            farthest = Math.max(farthest, i+nums[i]);
        }
        l = r+1;
        r = farthest;
        distance++;
    }
    
    return distance;
};