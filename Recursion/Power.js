//JS Math.Pow function
// let x = Math.pow(4, 3);
// console.log(x);

//Iterative function for Power
// function pow(n,x){
//     let ans = 1;
//     for(i=1 ; i<=x ; i++){
//         ans = ans*n; 
//     }
//     return ans;
// }

//Recursive function for power
function pow(n,x){
    if(x==0)
        return 1;
    if(x<0)
        return 1/pow(n,-x);
    else
        return n*pow(n,x-1);

}
console.log(pow(5,3));
console.log(pow(5,-3));
