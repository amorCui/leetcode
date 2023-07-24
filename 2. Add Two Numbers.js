/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var rst = null;
    if(l1 != null || l2 != null){
        if(l1 == null){
           l1 = new ListNode(0);
        }
        if(l2 == null){
           l2 = new ListNode(0)
        }
        var v1 = l1.val;
        var v2 = l2.val;
        var current = v1 + v2;
        var next = 0;
        if(current >= 10){
            current = current - 10;
            next = 1;
        }
        rst = new ListNode(current);
        if(next > 0){
            if(l1.next == null){
                l1.next = new ListNode(next);
            }else{
                l1.next.val = l1.next.val + next;
            }
        }
        rst.next = addTwoNumbers(l1.next,l2.next);
    }
    return rst;
};