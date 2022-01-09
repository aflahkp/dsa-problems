/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rodMap = {}
    var rgbCount = 0;
    var n = rings.length/2;
    var i = 0;
    while(i<2*n){
        if(rodMap[rings[i+1]]){
            if(!rodMap[rings[i+1]].includes(rings[i])){
              rodMap[rings[i+1]] = rodMap[rings[i+1]]+rings[i];
              if( rodMap[rings[i+1]].length == 3){
                rgbCount++;
            }
            }
        } else{
            rodMap[rings[i+1]] = rings[i];
        }
        i+=2;
    }
    return rgbCount;
};