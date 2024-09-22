//Question - https://www.geeksforgeeks.org/problems/sum-of-leaf-nodes/1
class Solution {
    SumofLeafNodes(root){
        if(root==null)
            return 0;
        if(root.left==null && root.right==null)
            return root.data;
        
        return this.SumofLeafNodes(root.left) + this.SumofLeafNodes(root.right);
    } 
}