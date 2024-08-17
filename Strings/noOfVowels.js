function noOfVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let ch of str){
        if(vowels.includes(ch)){
            count+=1;
        }
    }
    return count;
}

let str = "Hi , HOW ARE YOU?"
console.log(noOfVowels(str));