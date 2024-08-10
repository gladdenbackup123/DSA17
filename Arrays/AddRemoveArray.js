let shoppingList = ["Milk","Soap","Bread","Cheese"];

//length before addind elements
console.log(shoppingList.length);

//Add new elements in the end - butter , ketchup in shopping List
shoppingList.push("butter");
shoppingList.push("ketchup");
console.log(shoppingList);

//length after adding elements
console.log(shoppingList.length);

//remove the last element
shoppingList.pop();
console.log(shoppingList);

//remove first element - milk removed
shoppingList.shift();
console.log(shoppingList);

//add first element - water
shoppingList.unshift("water");
console.log(shoppingList);

// add element at specific index
shoppingList.splice(2,0,"Juice");
console.log(shoppingList);