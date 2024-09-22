//Question - https://leetcode.com/problems/binary-tree-preorder-traversal/
var preorderTraversal = function(root) {
    let ans = []

    function preorder(root){
        if(root==null)
            return ans;
        
        ans.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }

    preorder(root)
    return ans;
};