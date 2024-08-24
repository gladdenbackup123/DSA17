//Recursive
function fact(n){
    if(n==1)
        return 1;
    return n*fact(n-1);
}

console.log(fact(5));


//Iterative
// let n = 5;
// let fact = 1;
// for(i=5 ; i>=1 ; i--){
//     fact = fact*i;
// }

// console.log(fact);