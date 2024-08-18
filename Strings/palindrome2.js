function palindrome(str){
    let n = str.length;
    let s = 0;
    let e = n-1;
    while(s<=e){ 
        if(str[s]!=str[e]){
            return false;
        }
        s++;
        e--;
    }
    return true;
}

console.log(palindrome("madam")); //true
console.log(palindrome("sir")); //false
console.log(palindrome("racecar")); //true