//Given a sentence , return the number of words
//no special characters used

function noOfWords(str){
    let n = str.length;
    let spaces = 0;
    for(let i=0 ; i<n ; i++){
        if(str[i]==" "){
            spaces += 1;
        }
    }
    let words = spaces+1;
    return words;
}

let str = "My name is Gladden";
console.log(noOfWords(str));