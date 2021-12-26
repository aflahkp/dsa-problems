/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const length = nums.length;
    let result = 0;
    let i = 0;
    while(i<length){
        if(nums[i]!=val){
            nums[result] = nums[i]
            result++
        }
        i++
    }
    return result;
};