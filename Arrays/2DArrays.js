//1D Array
let oneDArray = [1,2,3,4,5,6];

//2D Array
//1 2 3
//4 5 6

let twoDArray = [[1,2,3],[4,5,6]];
console.log(twoDArray);

//1 2 3
//4 5 6
//7 8 9

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];
console.log(matrix);

//creating an empty 2D Array filled with zeros

const rows = 3;
const cols = 3;
const array = new Array(rows);
console.log(array);

for(let i=0 ; i<rows ; i++){
    array[i] = new Array(cols).fill(0);
}

console.log(array);

//Accessing elements of 2D Array
let mat = [[1,2, 3, 4 ],
           [5,6, 7, 8 ],
           [9,10,11,12]];

//Print 6
console.log(mat[1][1]);
//Print 12
console.log(mat[2][3]);

//Print all elements of 2D array -> mat
let row = 3;
let col = 4;

for(let r=0 ; r<row ; r++){
    for(let c=0 ; c<col ; c++){
        console.log(mat[r][c]);
    }
}

for(let c=0 ; c<col ; c++){
    for(let r=0 ; r<row ; r++){
        console.log(mat[r][c]);
    }
}