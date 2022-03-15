/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    const adjPositionsCount = 4;
    const adjXPositions = [-1,0,0,1];
    const adjYPositions = [0,-1,1,0];
    const visited = new Set();
    var islandsCount = 0;
    
    var getCombinedIndex = (x,y) => columns*(x) + y;
    
    var checkAdjacentLands = (x,y) => {
        const ci = getCombinedIndex(x,y);
        if(!visited.has(ci) && grid[x][y] == "1"){
            visited.add(ci);
        };
        for(let i=0;i<adjPositionsCount;i++){
            const adjX = x+adjXPositions[i];
            const adjY = y+adjYPositions[i];
            const adjCi = getCombinedIndex(adjX,adjY);
            if((!visited.has(adjCi)) &&adjX<rows && adjX>=0&& adjY>=0 && adjY<columns && grid[adjX][adjY] == "1"){
                    checkAdjacentLands(adjX,adjY)
            }
        }
    };
    
    
    for(let m=0; m<rows; m++){
        for(let n=0; n<columns; n++){
            const ci = getCombinedIndex(m,n);
            if(!visited.has(ci) && grid[m][n] == "1"){
                islandsCount++;
                checkAdjacentLands(m,n);
            }
        }
    }
    
    return islandsCount;
    
};