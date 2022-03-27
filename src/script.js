console.log('#4');

function calcSum(a, b) {
  return a + b;
}
console.log(calcSum(3, 7));

function calcDifference(a, b) {
  return a - b;
}
console.log(calcDifference(5, 3));

function calcMultiplication(a, b) {
  return a * b;
}
console.log(calcMultiplication(5, 5));

function calcDivision(a, b) {
  return a / b;
}
console.log(calcDivision(8, 2));

console.log('#5');

function showNumbers(n) {
  for (let i = 1; i <= n; i++) {
console.log(i);  
  }
}
showNumbers(5);

console.log('#6');

function showNumber(n) {
  for (let i = 5; i >= 1; i--) {
console.log(i);  
  }
}
showNumber(5);

console.log('#7');

function calcPow(x, n) {
  return x ** n;
}
console.log(calcPow(5, 3));

console.log('#8');

let a = 5;
let b = -1;
let isBigger;

  if ( a > b) {
    isBigger = function() {
      console.log(true);
    };
    } else {
      result = function() {
        console.log(false);
    };
  }
isBigger();

console.log('#9');

let isSmaller = (a < b) ? 
  function() { console.log(true); } :
  function() { console.log(false); } ;

  isSmaller();


