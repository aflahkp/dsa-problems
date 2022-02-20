/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if(grid.length <= 0) return 0;
    if(grid[0].length <= 0) return 0;
    
    let q = [];
    let r = grid.length;
    let c = grid[0].length
    let numFresh = 0;
    let total = 0;
    let time = 0;
    
    for(let i = 0; i<r; i++)
        for(let j=0;j<c;j++){
            if(grid[i][j] == 1){
                numFresh++;
                total++
            }
            else if(grid[i][j] == 2){
                q.push([i,j])
                total++;
            }
        }
    
    
    while(q.length && numFresh){
        let newQ = [];
        while(q.length){
            let [ii,ji] = q.shift();
            numFresh-=infect(ii,ji,newQ,grid)
        }
        
        q = newQ;
        time++;
    }
    if(numFresh == 0) {
        return time;
    }
    return -1;
    
};

var infect = function(i,j,q,grid){
            let rotten = 0;
             
            //up cell
            if(i-1>=0 && grid[i-1][j] == 1){
                   q.push([i-1,j])
                    grid[i-1][j]++
                   rotten++
             }
    
            //left cell
           if(j-1>=0 && grid[i][j-1] == 1){
                   q.push([i,j-1])
                    grid[i][j-1]++
                   rotten++
           }
    
           //right cell
           if(j+1<grid[0].length && grid[i][j+1] == 1){
                   q.push([i,j+1])
               grid[i][j+1]++
                   rotten++
           }
             
            //down cell
            if(i+1<grid.length && grid[i+1][j] == 1){
                   q.push([i+1,j])
                    grid[i+1][j]++
                   rotten++
             }
    
        return rotten;
}