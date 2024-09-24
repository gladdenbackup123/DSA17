s = "Hello"
stack = []
for(let i=0 ; i<s.length ; i++){
    stack.push(s[i])
}
let reverse = "";
while(stack.length>0){
    let popped = stack.pop()
    reverse += popped;
}

console.log(reverse)











