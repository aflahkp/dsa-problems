/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    let heap = new MaxHeap();
    let result = -1;
    let limit = k;
    while(nums.length){
        heap.add(nums.pop());
    }
    while(limit>=1){
        limit--;
        result = heap.remove();
    }
    return result+"";
};


var MaxHeap = function(){
    let heap = [null];
    
    
    
    var compareLE = (a,b) => {
        if(!b){
            return false;
        }
        if(a?.length<b?.length){
            return true;
        }
        else{
            return BigInt(a)<=BigInt(b);
        }
    }
    
    var compareG = (a,b) => {
        if(!b){
            return true;
        }
         if(a?.length>b?.length){
            return true;
        }
        else{
            return BigInt(a)>BigInt(b);
        }
    }
    
    this.add = function(n){
        heap.push(n);
        
        if(heap.length>2){
            let idx = heap.length-1;
            while(compareG(heap[idx],heap[Math.floor(idx/2)])){
                [heap[idx],heap[Math.floor(idx/2)]] = [heap[Math.floor(idx/2)],heap[idx]];
                
                if(Math.floor(idx/2) >1){
                    idx = Math.floor(idx/2);
                }
                else{
                    break;
                }
            }
        }
        else{return;}
    }
    this.remove = function(){
        if(heap.length==1){
            return null;
        }
        if(heap.length == 2){
            return heap.pop();
        }
        
        let result = heap[1];
        heap[1] = (heap.pop());
        let idx = 1;
        while(compareLE(heap[idx],heap[2*idx])|| compareLE(heap[idx],heap[2*idx+1])){
            if(compareG(heap[2*idx],heap[2*idx+1]) || !heap[2*idx+1]){
                [heap[idx],heap[2*idx]] = [heap[2*idx],heap[idx]];
                idx = 2*idx;
            }
            else{
                [heap[idx],heap[2*idx+1]] = [heap[2*idx+1],heap[idx]];
                idx = 2*idx+1;
            }
            
            if(2*idx>=heap.length-1){
                break;
            }
        }
        return result;
    }
    
}