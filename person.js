// const person = {
//     name: 'john deo',
//     age:20

// };
// module.exports=person;

class Person {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`My Name is ${this.name} and i am ${this.age}`)
    }
}

module.exports = Person