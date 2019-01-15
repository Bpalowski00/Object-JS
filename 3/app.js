/// Prototypes Object.Prototypes

// Constructor has Person.Prototypes

////////////////////////////////////////////////////////// Peson Constructor
function Person(firstName,dob){
  this.firstName = firstName;
  this.birthdate = new Date(dob);

  // <!--Moved out of constructor and into a prototype-->

  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthdate.getTime();
  //   const ageDate = new Date(diff);
  //   return `Hello there ${this.firstName}, your age is  ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old  `;
  // }
}
////////////////////////////////////////////////////////// Creating the Prototypes

///////////////////////////////////// Calculateage prototype
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthdate.getTime();
  const ageDate = new Date(diff);
  return `Hello there ${this.firstName}, your age is  ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old  `;
}

////////////////////////////////////// Full Name prototype
Person.prototype.getFirstname = function(){
  return ` Only going to return the first name protperty ${this.firstName}`
}

/////////////////////////////////////////////////// Tweaking with prototype and changing value

Person.prototype.newFirstName = function(newFirst){
  this.firstName = newFirst;
  return ` Here is a example of changing the property value using proptypes ${this.firstName}`
}

////////////////////////////////////////////////// Instantiate  create a new Person
//

const me = new Person('Brian','07-09-1992');
const you = new Person('Hank','07-09-1800');

//Console.log()

console.log(me);
console.log('');
////////////////////////////
console.log(me.hasOwnProperty('firstName'));
console.log('');
////////////////////////////
console.log(me.calculateAge());
console.log(you.calculateAge());
////////////////////////////
console.log('');
////////////////////////////
console.log(me.getFirstname());
console.log(you.getFirstname());
////////////////////////////
console.log('');
console.log(me.newFirstName('Who'));
console.log(you.newFirstName('You'));
////////////////////////////
console.log('');
