//push -> Insert (top/last) - stack.push()
//pop -> Delete (top/last) - stack.pop()
//peek -> Topmost element (top/last) - stack[n-1]

stack = [1,2,3,4,5]
stack.push(6)
console.log(stack)
stack.pop()
console.log(stack)

let n = stack.length;
// console.log(stack[n-1])

console.log("Peek Element is : ", stack[n-1])
let popped = stack.pop();
console.log("Popped Element is :", popped);

console.log(stack);



 