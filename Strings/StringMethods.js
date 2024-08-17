//1. concat() -> similar to + operator

let a = "hello";
let b = "world";
let c = a.concat(b); //helloworld
let d = b.concat(a); //worldhello
console.log(c);
console.log(d);

          
let s = "Simon Go Back Go Back";

// indexOf() -> returns the position of first occurence
console.log(s.indexOf('G')); // 6 
console.log(s.indexOf('Back')); // 9 
console.log(s.indexOf('H')); // -1

//lastIndexOf() -> returns the position of last occurence
console.log(s.lastIndexOf('G')); // 14
console.log(s.lastIndexOf('Back')); // 17
console.log(s.lastIndexOf('H')); // -1

//substring(start index , end index) - start in included , end is not included 
console.log(s.substring(0,5)); //0 1 2 3 4
let message = s.substring(6,13);
console.log(message); //Go Back - 6 to 12

console.log(s.substring(6)); // 6 to end

//toUpperCase()
let upper = s.toUpperCase();
console.log(upper);

//toLowerCase()
let lower = s.toLowerCase();
console.log(lower);

// helloworld -> toLowerCase() -> helloworld
// helloworld -> toUpperCase() -> HELLOWORLD 
// HELLOWORLD -> toLowerCase() -> helloworld
// HELLOWORLD -> toUpperCase() -> HELLOWORLD 

//split()

let sentence = "Go,Bye,Get Lost";
let words = sentence.split(',');
console.log(words);

let sentence2 = "Hello how do you do";
let words2 = sentence2.split(' ');
console.log(words2);

let sentence3 = "GG-IN-THE-CHAT";
let words3 = sentence3.split('-');
console.log(words3);

//join()
let wordss = ['why','fear','when','Gladden','is','here'];
let tagline = wordss.join(' ');
console.log(tagline);





