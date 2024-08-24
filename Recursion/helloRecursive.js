function hello(count){
    if(count>10)
        return;

    console.log("Hello");
    hello(count+1);
}

hello(1);