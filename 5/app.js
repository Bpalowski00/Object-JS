///// Object Create
const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName}`;
  },
  changeName: function(newName){
    this.firstName = newName;
  }
}

/////////////////////////////////////////////1  Create and passing in object
const me = Object.create(personPrototypes);
me.firstName = 'Brian_0';
me.age = 20;
//// Before
console.log("Before change = " +me.greeting());
////// new
me.changeName('brian_1');
//////// After
console.log("After change = " +me.greeting());

console.log("");

///////////////////////////////////////////// 2 Create with value and object 2nd syntax
const me2 = Object.create(personPrototypes, {
  firstName: {value: 'Brian_2'},
  age: {value: 20}
});
console.log(me2);
console.log(me2.greeting());



console.log("");
