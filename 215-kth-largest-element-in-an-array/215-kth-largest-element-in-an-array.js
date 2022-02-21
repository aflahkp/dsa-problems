/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(nums.length == 1) return nums[0];
    
    let ki = nums.length -k;
    
    var quickSelect = function(l,r){
     let pivot = nums[r];
      let p = l;
    
      for(let i = l; i<r; i++){
        if(nums[i]<=pivot){
            [nums[p],nums[i]] = [nums[i],nums[p]];
            p++;
        }
        
       }
       [nums[p],nums[r]] = [nums[r],nums[p]]
        console.log(p,ki,pivot,nums[0])
       
       if(p>ki) return quickSelect(l,p-1)
       else if(p<ki) return quickSelect(p+1,r)
        
       return nums[p];
    }
    
    return quickSelect(0,nums.length-1)
};

