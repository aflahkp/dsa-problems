/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = nums[0];
    var i= 1,length = nums.length;
    while(i<length){
        nums[i]=Math.max(nums[i], nums[i]+nums[i-1]);
        sum = Math.max(sum,nums[i]);
        i++;
     }
    return sum;
};