//////////////////////////////////////////////////////////// Protopal Inheritance
//////////////////////////////// 1-Constructor Person
function Person(firstName,lastName){
this.firstName = firstName;
this.lastName = lastName;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// 2-Constructor Customer passing in properties call()
function Customer(firstName,lastName,phone,membership){
  Person.call(this, firstName,lastName);
  this.phone = phone;
  this.membership = membership;
}
///////////////////////////////////////////// Inheritance of person greeting prototype
Customer.prototype = Object.create(Person.prototype);
///////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////// Prototype Greeting method
Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}
//////
Customer.prototype.greeting = function(){
  return `Changed greeting method returns ${this.firstName} ${this.lastName} and your phone number is ${this.phone} your membership is now ${this.membership}`;
}

//////////////////////////////// Prototype Greeting method returns greeting Customer changing location of prototype
Customer.prototype.constructor = Customer;

////////////////////////////////////////////////// Instantiate  create a new Person
const me = new Person('Brian','Palowski');
///////////////////////// Instantiate  create a new Customer
const customer1 = new Customer('Brian1','Palowski1','425-333-3333','active');
///////////// Console log new customer with greeting prototype
console.log("Greeting method with new Person " + me.greeting());
///////////// Console log new customer with greeting prototype
console.log("Passed in greeting prototype " + customer1.greeting());
