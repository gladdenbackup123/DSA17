function countdown(n){
    //base case
    if(n==0){
        console.log(0);
        return;
    }

    console.log(n);
    countdown(n-1);
}

countdown(100);