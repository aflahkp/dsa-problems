/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var len = nums.length;
    var count = new Array(100).fill(0);
    var result = [];
    
    
    for(let i=0;i<len;i++){
        count[nums[i]]++;
    }
    for(let i=1;i<101;i++){
        count[i]+=count[i-1]
    }
    for(let i=0;i<len;i++){
        if(nums[i] == 0){
            result[i] = 0;
        }
        else{
            result[i]=count[nums[i]-1];
        }
    }
    
    
    return result;
    
    
};