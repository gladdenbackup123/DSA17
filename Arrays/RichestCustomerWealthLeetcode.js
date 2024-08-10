//Question - https://leetcode.com/problems/richest-customer-wealth/
var maximumWealth = function(accounts) {
    let r = accounts.length; 
    let c = accounts[0].length; 

    let ans = 0; 

    for(let i=0 ; i<r ; i++){ //i -> customer
        let sum =0;
        for(let j=0 ; j<c ; j++){ // j -> bank account of customer
            sum = sum + accounts[i][j];
        }
        
        if(sum>ans)
            ans = sum;
    }

    return ans;
};