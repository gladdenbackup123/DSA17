let nums = [5,1,2,8,7,9]; 
let n = nums.length;
let key = 12;
let found = false;

for(let i=0; i<n ; i++){
    if(nums[i] == key){
        found = true;
        console.log("Element Found at index",i);
        break;
    }
}
if(found==false)
    console.log("Element not found."); 