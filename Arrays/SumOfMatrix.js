function checkSum(m1,m2,r,c){
    //iterate and calculate sum1 , sum2
    let sum1=0;
    let sum2=0;
    for(let i=0 ; i<r ; i++){
        for(let j=0 ; j<c ; j++){
            sum1 += m1[i][j];
            sum2 += m2[i][j];
        }
    }
    //compare sum1 and sum2
    if(sum1==sum2)
        console.log("Sum of Matrix-1 is equal to Matrix-2")
    else if(sum1>sum2)
        console.log("Sum of Matrix-1 is greater than Matrix-2");
    else
        console.log("Sum of Matrix-2 is greater than Matrix-1");
}

let r=3;
let c=2;
let m1 = [[7,1],[2,4],[5,6]]; //3 x 2 //25
let m2 = [[4,4],[3,5],[1,8]]; //3 x 2 //25
checkSum(m1,m2,r,c);