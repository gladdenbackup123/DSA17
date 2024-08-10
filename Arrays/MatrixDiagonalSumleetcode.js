//Question - https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function(mat) {
    sum = 0;
    let n = mat.length;
    for(i=0 ; i<n ; i++){
        for(let j=0 ; j<n ; j++){
            if(i==j) 
                sum += mat[i][j];  //Add all d1 elements
            if(i+j==n-1 && i!=j)
                sum += mat[i][j]; //Add all d2 elements except i==j
        }
    }

    return sum;
};