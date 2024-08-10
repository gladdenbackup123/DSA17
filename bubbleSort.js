let nums = [3,4,1,5,2];
let n = nums.length; //5

for(let i=0 ; i<n-1 ; i++){ // passes
    for(let j=0 ; j<n-i-1 ; j++){ //comparisons
        if(nums[j] > nums[j+1]){
            temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    } 
}

console.log(nums);