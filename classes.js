// Sugar Syntax Class
class Dog {

    age = null
    race = null
    color = null

    // constructor (age, race, color) {
    //     this.age = age
    //     this.race = race
    //     this.color = color
    // }
}


const oso = new Dog(5, 'husky', 'black')
const yak = new Dog(11, 'dashhund', 'brown')
const otherdog = new Dog(8, 'labrador', 'black')
console.log(mynewdog.age) // 5

// Traditional Javascript Object like class
const dog = {
    age: null,
    race: null,
    color: null

    
}


dog.prototype.constructor = function(age, race, color) {
    this.age = age
    this.race = race
    this.color = color
}

const mydog = Object.create(dog)