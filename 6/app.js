////////// ES6 Classes Constructor
class Person{
  constructor(firstName,lastName,dob) {
    this.firstName =  firstName;
    this.lastName = lastName;
    this.birth = new Date(dob);
  }
  greeting(){
    return ` Hello ${this.firstName} ${this.lastName}`
  }
  calAge(){
    const diff = Date.now() - this.birth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970) ;
  }
  changeName(newName){
    this.firstName = newName;
  }
  static addNumbers(x,y){
    return x+y;
  }
}
////////// Instantiate
const me = new Person('Brian','P', '03-09-1992');
////////// Console.log
console.log(me);
console.log(me.greeting());

me.changeName('jones')

console.log(me);
console.log(me.greeting());

console.log(me.calAge());
//////////////////////////////// Static method es6 use a function method
console.log(Person.addNumbers(1,2));
