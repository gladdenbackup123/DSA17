//Question - https://leetcode.com/problems/missing-number/

//Solution-1
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let missing = 0;
    console.log(nums);
    for(let i=0 ; i<=n ; i++){
        if (i != nums[i]){
            missing = i;
            break;
        }
    }

    return missing;
};


//Solution-2 
var missingNumber = function(nums) {
    let n = nums.length;
    let total = n*(n+1)/2;
    let mySum = 0;

    for(let i=0 ; i<n ; i++){
        mySum = mySum + nums[i];
    }

    let missing = total - mySum;
    return missing;
};