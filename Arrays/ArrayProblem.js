//In a classroom of n students 
//teacher distributed random no. of chocolates 
//to all the students
//Badmash bablu stole and ate the chochlates 
//from 3 students who got the highest num of chocolates in the classs.
//How many chocolates did bablu eat ?

let chocolates = [4,2,5,6,1,3,7,3];
let n = chocolates.length;

//solution 1 - sort in ascending & add last three
// chocolates.sort();
// let stolenChocolates = chocolates[n-1] + chocolates[n-2] + chocolates[n-3];

// console.log(stolenChocolates);

//solution 2 - sort in descending - add first three
chocolates.sort();
chocolates.reverse();

let stolen = 0;
for(let i=0 ; i<3 ; i++){
    stolen += chocolates[i];
}
console.log(stolen);