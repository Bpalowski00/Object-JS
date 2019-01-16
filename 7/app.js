////// Constructor class Person

class Person{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName} `;
  }
}


//// new class Customer Subclass of Person
class Customer extends Person{
  constructor(firstName,lastName,phone,membership){
    super(firstName,lastName);

    this.phone = phone;
    this.membership = membership;
  }
   getMembership(){
    return `Hello how are you ${this.phone} ${this.membership}`;
  }
}


////////////////// Instantiate Customer
const me = new Customer('Brian','P','000-000-0000','active');


/// Static method
console.log(me.getMembership());
