function palindrome(str){
    let rev = str.split('').reverse().join('');
    if(rev==str)
        return true;
    else
        return false;
}
console.log(palindrome("madam")); //true
console.log(palindrome("sir")); //false
console.log(palindrome("racecar")); //true