//Question - https://www.geeksforgeeks.org/problems/print-matrix-in-snake-pattern-1587115621/1

class Solution 
{
    //Function to return list of integers visited in snake pattern in matrix.
    snakePattern(matrix)
    {
        let ans = [];
        let n = matrix.length;
        for(let i=0 ; i<n ; i++){
            if(i%2==0){ //even row index
                for(let j=0 ; j<n ; j++) //left to right
                    ans.push(matrix[i][j]);
            }
            else{ //odd row index
                for(let j=n-1 ; j>=0 ; j--) //right to left
                    ans.push(matrix[i][j]);
            }
            
        }
        
        return ans;
    } 
}