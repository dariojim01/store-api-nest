const myName = 'Dario';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a+b;
}
suma(12,23);

class Person {
  age;
  name;

  constructor(age:number, name: String){
    this.name=name;
    this.age=age;
  }

  getSummary(){
    return `my name is ${this.name}, ${this.age}`;

  }
}

const dj = new Person(37, 'Dario');
 dj.getSummary();
