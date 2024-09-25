//enqueue - Insert element from rear - push()
//dequeue - Remove the first element - shift()
//peek/front - Front element /First element
queue = [1,2,3,4,5];

queue.push(6);
console.log(queue);

queue.shift(); //1 removed
queue.shift(); //2 removed
console.log(queue);
queue.push(7);
console.log(queue);

console.log("Front element is :", queue[0]);
queue.shift(); //3 removed
console.log("Front element is :", queue[0]);