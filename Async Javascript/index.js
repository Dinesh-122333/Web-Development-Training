// synchronous sys 

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// Asynchronous sys

console.log(1);
console.log(2);

setTimeout(() =>{
    console.log('hi')// it not affecting the code and printing 2sec late and at the last
},2000)

console.log(3)
console.log(4)

