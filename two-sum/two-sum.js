/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumMap = new Map();
    let len = nums.length;

    for (let i = 0;i<len;i++){
       if(sumMap.has(target - nums[i])){
           return [sumMap.get(target - nums[i]), i]
       }
        else{
            sumMap.set(nums[i], i);
        }
    }
};