/*function add(a,b)
{
    return a+b;
}

let x=20,
y=10;document. Write ("This is \a program,");
let result =add(x,y);
console.log(result)*/


const arr = [1, 2, 4, 4, 4, 2, 2, 2, 2]

let n = 3;



const result = arr.reduce((a,v)=>(

a.filter(f=>f===v).length < n ?a.push(v):a,a),[]);



console.log(result);


var a;
console.log(typeof a)

const x = 1;
const y = 1;

console.log(+x);
// expected output: 1

console.log(-y);
// expected output: -1


console.log ("This is \ a program,");


let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substr(3, 4)) 

const num3 = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num3)

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81

let num1 = '9.81'
let numFloat1 = Number(num1)

console.log(numFloat1) // 9.81
let num2 = '9.81'
let numFloat2 = +num2

console.log(numFloat2) // 9.81



