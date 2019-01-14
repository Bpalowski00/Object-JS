///////////////////////////////////   Object Literals
// const me = {
//   name: "brian",
//   age: 30
// };
// console.log(me);
// console.log(me.age);

///////////////////////////////  Person Constructor Hardcoded
// function Person() {
//   this.name = "brian";
// }
// /// Instantiate new object
// const brian = new Person();
// console.log(brian);

/////////////////////////////  Passing in the new Parameter
// function Person2(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const brian2 = new Person2("brian2", 2);
// const brian3 = new Person2("brian3", 3);
// console.log(brian2);
// console.log(brian3);

/////////////////////////////  // Core object with constructor
// function Person(name, dob) {
//   this.name = name;
//   // Core object with constructor
//   this.birthdate = new Date(dob);
// }
// const me = new Person('brian3', '01-09-1992');
// console.log(me);

/////////////////////////////  // Method inside of Object calculateAge
function Person(name, dob) {
  this.name = name;
  this.birthdate = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
const me = new Person('brian4', '09-09-1992');
console.log(me.calculateAge());
