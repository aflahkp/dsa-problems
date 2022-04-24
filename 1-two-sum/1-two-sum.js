/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var map = {};
    
    for(let i=0;i<nums.length; i++){
        let num = nums[i];
        if(map[`${target-num}`]!=undefined){
            return ([i, map[target-num]]);
        } else{
            map[num] = i
        }
    }
    
};