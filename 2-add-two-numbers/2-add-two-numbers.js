/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = null;
    let currentNode = null;
    let head1 = l1;
    let head2 = l2;
    
    while(head1 || head2){
        let sum = carry +(head1?.val ?? 0) + (head2?.val ?? 0);
        carry = sum>=10? 1 :0;
        sum = sum>=10?sum-10:sum;
        
        
        if(!currentNode){
            currentNode = new ListNode(sum,null);
            result = currentNode;
        } else{
            currentNode.next = new ListNode(sum,null);;
            currentNode = currentNode.next;
        }
        
        
        if(head1!=undefined) head1 = head1.next;
        if(head2!=undefined) head2 = head2.next;
    }
    if(carry>0){
        currentNode.next = new ListNode(carry,null);;
    }
    return result;
};