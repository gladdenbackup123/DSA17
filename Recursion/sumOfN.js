function sumOf(n){
    //base case
    if(n==1)
        return 1;

    return n + sumOf(n-1);
}

console.log(sumOf(10));