function generateSubsets(arr,i,curr,powerSet){
    if(i==arr.length){
        powerSet.push([...curr]);
        return;
    }

    generateSubsets(arr,i+1,curr,powerSet); // leave
    curr.push(arr[i]);
    generateSubsets(arr,i+1,curr,powerSet); // take
    curr.pop(); //backtracking
}

let arr = [1,2,3];
let powerSet = []
generateSubsets(arr,0,[],powerSet)
console.log(powerSet);