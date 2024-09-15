//Question - https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1

//Naive Approach
class Solution {
    getKthFromLast(head, k) {
        //find the length of linked list
        let length = 0;
        let curr = head;
        while(curr!=null){
            length += 1;
            curr = curr.next;
        }
        if(k>length)
            return -1;
        
        //forward rank
        let rank = length-k+1;
        
        //reach the rank node
        curr = head;
        for(let i=1 ; i<rank ; i++){
            curr = curr.next;
        }
        return curr.data;
    }
}

//Optimised - Two Pointers(Slow and Fast) Approach
class Solution {
    getKthFromLast(head, k) {
        let slow = head;
        let fast = head;
        //Move fast to kth Node
        for(let i=1 ; i<k ; i++){
            fast = fast.next;
            if(fast==null)
                return -1;
        }
        //Iterate till fast reaches last
        while(fast.next!=null){
            slow = slow.next;
            fast = fast.next;
        }
        return slow.data;
    }
}