//Given the head of the LL , reverse it and return the new head
// 1->2->3->4   Head : 1
// 4->3->2->1   Head : 4
//Question - https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while(curr!=null){
        let nxt = curr.next; //take backup 
        curr.next = prev; //reverse 

        prev = curr; //move forward
        curr = nxt;
    }

    head = prev;
    return head;
};