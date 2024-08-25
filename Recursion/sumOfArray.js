function sumArray(arr,n){
    if(n==0) return 0;

    return arr[n-1] + sumArray(arr,n-1)
}

let arr = [3,2,5,7,1,8];
let n = arr.length;
console.log(sumArray(arr,n));
