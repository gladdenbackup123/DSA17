//Question- https://www.geeksforgeeks.org/problems/key-pair5616/1

//Solution-1
class Solution {
    hasArrayTwoCandidates(arr, x) {
        let n = arr.length;
        
        for(let i=0 ; i<n ; i++){
            let target = x-arr[i];
            //lets search for target forward
            for(let j=i+1 ; j<n ; j++){
                if(arr[j]==target)
                    return true;
            }
        }
        
        return false;
    }
}

//Solution-2
class Solution {
    hasArrayTwoCandidates(arr, x) {
        let n = arr.length;
        let L=0;
        let R=n-1;
        arr.sort((a,b)=>a-b);
        
        while(L<R){
            let sum = arr[L]+arr[R];
            
            if(sum==x)
                return true;
            else if(sum<x)
                L++;
            else
                R--;
        }
        
        return false;
    }
}