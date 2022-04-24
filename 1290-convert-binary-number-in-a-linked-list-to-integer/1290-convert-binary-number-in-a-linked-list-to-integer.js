/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let result = 0;
    let exp = 0;
    let current = head;
    let next = null;
    let prev = null;
    while(current!=null){
        next = current.next;
        current.next = prev;
        prev = current
        current = next;
    }
    
    
    while (prev?.val || prev?.val == 0){
        result += (2**exp) * prev.val;
        prev = prev.next
        exp++;
    }
    
    return result;
    
};