// Question -Given a 2D array , find the maximum diagonal sum

// Intuition - A 2D array has 2 diagonals , we need to find the sum of elements on both 
//diagonals , and then compare to find the maximum doagonal sum

function maxDiagonalSum(mat){
    d1Sum=0;
    d2Sum=0;
    let n = mat.length;
    for(i=0 ; i<n ; i++){
        for(let j=0 ; j<n ; j++){
            if(i==j)
                d1Sum += mat[i][j]; 
            if(i+j==n-1)
                d2Sum += mat[i][j];
        }
    }
    let ans = Math.max(d1Sum,d2Sum);

    return ans;
}

let mat = [[7,3,9],
           [1,6,8],
           [9,2,7]];
console.log(maxDiagonalSum(mat));


