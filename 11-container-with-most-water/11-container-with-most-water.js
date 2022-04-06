/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const myHashmap = new Map();
    var l = 0;
    var r = height.length -1;
    var maxVolume = -1;
    
    while(r>l){
        maxVolume = Math.max(maxVolume, (r-l)*Math.min(height[r],height[l]));
        if(height[r] > height[l]){
            l++;
        }else{
            r--;
        }
    }
    return maxVolume;
};