//Given an array money , containing bank balances of 
//different bank accounts of Bablu
//Calculate the total money Bablu has.

let money = [400,250,150,100];
let n = money.length;

let total = 0;
for(let i=0 ; i<n ; i++){
    total = total + money[i];
}
console.log(total);