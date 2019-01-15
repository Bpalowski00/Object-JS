/// Primatives in Object Constructors Just so you know
//String
const name1 = 'Bo';
const name2 = new String('Bo');

// Number
const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Functions
const getSome = function(x,y){
  return x+y;
}
getSome(1,1);

const getSome2 = new Function('x','y', 'return 1+1');

// Objects
const me = {
  name:"brian"
}
const me1= new Object({
  name: "brian"
})


// Arrays
const arr = [1,2,3];
const arr2 = new Array(1,2,3);

// Regular expression
const reg = /\w+/;
const reg2 = new RegExp('\\w+')
