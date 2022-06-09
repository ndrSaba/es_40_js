class Person {
  _firstName = '';
  _lastName = '';
  _age = '';
  _fullName = '';

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._fullName = this.fullName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value){
    this._age = value;
  }

  get fullName(){
    return this._firstName + ' ' + this._lastName;
  }

  set fullName(value){
    this._fullName = value;
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);