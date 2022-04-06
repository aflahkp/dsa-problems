class Solution {
    fun maxArea(height: IntArray): Int {
        var maxVolume: Int = 0;
        var l: Int = 0;
        var r: Int = height.size - 1;
        
        while(r>l){
            maxVolume = maxOf(maxVolume, (r-l)*(minOf(height.get(l),height.get(r))))
            if(height.get(l)> height.get(r)){
                r--;
            }
            else{
                l++;
            }
        }
                
        return maxVolume;
    }
}