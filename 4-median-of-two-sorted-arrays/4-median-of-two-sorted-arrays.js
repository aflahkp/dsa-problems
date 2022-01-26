/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var x = nums1.length;
    var y = nums2.length;
    
    if(x>y){
        return findMedianSortedArrays(nums2, nums1);
    }
    
    var halfLength = Math.floor((x + y + 1)/2);

    

    var start = 0;
    var end = x;
    
    
    
    while(start<=end){
        
        var partX = Math.floor((start + end)/2);
        var partY = halfLength - partX;
        
        
        
        var leftMaxX = partX == 0? -99999999: nums1[partX-1];
        var leftMaxY = partY == 0? -99999999: nums2[partY-1];
        
        var rightMinX = partX == x? 99999999: nums1[partX];
        var rightMinY = partY == y? 99999999: nums2[partY];
        
        
        
        if(leftMaxX<=rightMinY && leftMaxY<=rightMinX){
           if((x+y)%2 == 0){
                return (Math.max(leftMaxX,leftMaxY) + Math.min(rightMinX, rightMinY))/2
            }
            else return Math.max(leftMaxX,leftMaxY)
           }
        else if(leftMaxX>rightMinY){
            //Shift partX Left
            end = partX-1;
        }
        else{
            //Shift partX Right
            start = partX+1;
        }
    }
    
};