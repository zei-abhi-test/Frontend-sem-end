const numbers = [1,2,3,4,5,6,7] ;

const squared = numbers.map(n => n* n) ;
console.log(squared) ;

const evens = numbers.filter (n => n%2 ===0) ;
console.log(evens) ;

const sum = numbers.reduce((acc , n) => acc + n , 0) ;
console.log(sum) ;


function greet(name) {
  console.log("OMGG " + name);
}

function callGreet(callback) {
  callback("ZEI");
}

callGreet(greet);


// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// const add = (x, y) => x + y;
// const sub = (x, y) => x - y;

// console.log(calculate(5, 2, add)); // 7
// console.log(calculate(5, 2, sub)); // 3
