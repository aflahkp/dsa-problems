/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const result = [];
    const safe = new Map();
    
    const dfs = (ind) => {
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