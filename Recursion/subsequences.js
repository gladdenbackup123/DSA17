function subsequences(s,i,curr){  
    if(i==s.length){
        console.log(curr);
        return;
    }
    subsequences(s,i+1,curr+s[i]) //take
    subsequences(s,i+1,curr) //leave
}
s = "abc";
subsequences(s,0,"")

