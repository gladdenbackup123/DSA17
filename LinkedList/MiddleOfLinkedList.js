//Given the head of a singly linked list, return the middle node of the linked list.
//Question - https://leetcode.com/problems/middle-of-the-linked-list/description/

var middleNode = function(head) {
    //length of linked list - count nodes
    let count = 0;
    curr = head;
    while(curr!=null){
        count+=1;
        curr = curr.next;
    }
    //steps for mid
    let mid = Math.floor(count/2);
    //Reach the middle Node - mid steps
    curr = head; 
    for(let i=1 ; i<=mid ; i++){
        curr = curr.next;
    }
    return curr;
};