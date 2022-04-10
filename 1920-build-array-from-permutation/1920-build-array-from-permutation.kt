class Solution {
    fun buildArray(nums: IntArray): IntArray {
        var result = IntArray(nums.size);
        for(i in 0..nums.size-1){
            result[i] = nums[nums[i]]
        }
        return result;
    }
}