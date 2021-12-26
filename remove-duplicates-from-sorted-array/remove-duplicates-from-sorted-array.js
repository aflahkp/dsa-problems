/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const length = nums.length;
    let k = 0;
    let i = 0;
    let j = 0;
    let largest = -101;
    
    while(i<length){
        if(nums[i]>largest){
            largest = nums[i]
            k = i+1;
        }
        if(nums[i] >= nums[i+1]){
            
            if(j<i+1){
                j = i+1;    
            }
            
            while(nums[j]<=nums[i] && j<length){
                j++
            }
            if(j<nums.length){
                [nums[i+1],nums[j]]=[nums[j],nums[i+1]];
            }
        }
        i++;
    }
    return k;
};