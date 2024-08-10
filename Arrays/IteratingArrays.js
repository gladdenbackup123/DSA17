let students = ["Nazara","Sudarshan","Abhishek","Tushar"];
let n = students.length;
// console.log("Hello "+students[0]);
// console.log("Hello "+students[1]);
// console.log("Hello "+students[2]);
// console.log("Hello "+students[3]);

//Using for loop for iterating array elements
for(let i=0 ; i<n ; i++){
    console.log("Hello "+students[i]);
}

//Using for each loop for iterating array elements
students.forEach(s => console.log("Hello "+s));

let nums = [1,2,3,4,5];
nums.forEach(num => console.log(num));
