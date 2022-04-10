import kotlin.math.abs

class Solution {
    fun minTimeToVisitAllPoints(points: Array<IntArray>): Int {
        var time = 0;
        for(i in points.indices){
            var x = points[i][0];
            var y = points[i][1];
            
            if(i<points.size -1){
                var x2 =  points[i+1][0];
                var y2 =  points[i+1][1];
                
                while(x != x2 || y!=y2){
                    if(abs(x-x2) > 0 && abs(y-y2) > 0){
                        if(x2-x >0){
                            x++;
                        } else {
                            x--
                        }
                        
                        if(y2-y >0){
                            y++;
                        } else {
                            y--
                        }
                        
                    }
                    else if(abs(x-x2) == 0 && abs(y-y2) > 0){
                         if(y2-y >0){
                            y++;
                         } else {
                            y--
                        }
                    }
                    else if(abs(x-x2) > 0 && abs(y-y2) == 0){
                        if(x2-x >0){
                            x++;
                        } else {
                            x--
                        }
                    }
                    time++
                }
            }
        }
        
        return time;
    }
}