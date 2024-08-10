let nums = [5,3,1,4,6,2]; 
let n = nums.length;

nums.sort((a,b)=>a-b);
let max = nums[n-1];
let min = nums[0];
console.log("Maximum is "+max);
console.log("Minimum is "+min);


let arr = [5,1,6,2,7,4];

let maxi = arr[0];
let mini = arr[0];

for(let i=0 ; i<n ; i++){
    if(arr[i] > maxi)
        maxi = arr[i] 
    if(arr[i] < mini)
        mini = arr[i]
}
console.log("Maximum element is : "+maxi);
console.log("Minimum element is : "+mini);

