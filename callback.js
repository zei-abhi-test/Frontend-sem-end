function calcuator(a,b,operation) {
    return operation(a,b);
}

const add=(x,y)  => x+y;
const subtract=(x,y) => x-y;
const multiply=(x,y) => x*y;
const divide=(x,y) => x/y;

console.log(calcuator(16,20,add));
console.log(calcuator(16,10,subtract));
console.log(calcuator(16,20,multiply));
console.log(calcuator(16,4,divide));

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer(); 

// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter(); // 4