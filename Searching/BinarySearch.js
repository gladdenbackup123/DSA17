let nums = [2,3,5,7,8,9,10];
let n = nums.length;
let s =0;
let e = n-1;
let key = 7;
let found = false;
while(s<=e){
    let m = Math.floor((s+e)/2);

    if(nums[m]==key){
        found = true;
        console.log(key,"found at index" , m);
        break;
    }else if(key < nums[m]){
        e = m-1; // key is smaller , so go to left
    }
    else{
        s = m+1; // key is greater , so go to right
    }   
}

if(found==false){
    console.log("Element not found");
}