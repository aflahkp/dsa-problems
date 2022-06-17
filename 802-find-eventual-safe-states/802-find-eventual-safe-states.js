/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    var n = graph.length;
    var result = [];
    var safe = new Map();
    
    var dfs = (ind) => {
        if(safe.has(ind)){
            return safe.get(ind);
        }
        
        safe.set(ind,false);
        for(let node of graph[ind]){
            if(!dfs(node)){
                return false;
            }
        }
        
        safe.set(ind,true);
        return true;
    }
    
    for(let i=0; i<n;i++){
        if(dfs(i)){
            result.push(i);
        }
    }
    
    return result;
};