class TreeNode { 
    constructor(val) {
        this.val = val; 
        this.left = null; 
        this.right = null; 
    } 
}

let root = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);

root.left = b;
root.right = c;
b.left = d;
console.log(b);
console.log(c)
console.log(root.left.val);
checkRoot(root)


function checkRoot(root){
    if(root.val%2==0)
        console.log("Root is even");
    else
        console.log("Root is Odd");
}

