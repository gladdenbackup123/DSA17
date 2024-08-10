function checkIdentity(m){
    let r = m.length; //no of rows = 3
    let c = m[0].length; //length of any row = no. of cols = 3

    if(r!=c)
        return false;

    for(let i=0 ; i<r ; i++){ // iterate rows
        for(let j=0 ; j<c ; j++){ //iterate cols
            //if diagonal element is not 1 , return false
            if(i==j && m[i][j]!=1)
                return false;
            //if non-diagonal element is not 0 , return false
            if(i!=j && m[i][j]!=0)
                return false;
        }
    }

    return true;
}

let m1 = [[1,0,0],
          [0,1,0],
          [0,0,1]];
console.log(checkIdentity(m1));

let m2 = [[1,0,1],
          [0,1,1],
          [0,0,0]];
console.log(checkIdentity(m2));