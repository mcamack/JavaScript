'use strict';

class Animal {
    constructor(voice){
        this.voice = voice || "grunt"
    }

    speak(){
        display(this.voice)
    }
}

class Cat extends Animal {
    constructor(name, color){
        super('Meow')
        this.name = name
        this.color = color
    }
}

//Objects do not have prototypes like functions
//but they do have the __proto__

//can create a new property for the Object prototype, even before a 'new' object is created
Cat.prototype.age = 4

//each 'new Cat' will create an Object where the __proto__ property points to the function's prototype
//each Cat will have an age even though the Cat Object doesn't have an age property itself, only the prototype does
//instance properties get added from our Cat constructor
var fluffy = new Cat("fluffy", "white")
var muffin = new Cat("muffin", "brown")

display(fluffy.__proto__)
display(fluffy.__proto__.__proto__)
fluffy.speak()  // 'Meow'

//if you ask an object for the value of its properties and it gives you an answer,
//that doesn't mean it actually has that property. 
//One of the prototypes for that Object could be returning that value
display("fluffy.__proto__.age: " + fluffy.__proto__.age)                    // 4
display("fluffy.hasOwnProperty(\"age\"): " + fluffy.hasOwnProperty("age"))  // false
display("fluffy.age: " + fluffy.age)                                        // 4  - since the fluffy instance doesn't have an age property, this is actually getting the prototype's age prop
fluffy.age = 8                                                              // this creates an age property in the fluffy instance
display("fluffy.hasOwnProperty(\"age\"): " + fluffy.hasOwnProperty("age"))  // true - now fluffy has this property, other Cat's do not and would still use the proto age
display("fluffy.age: " + fluffy.age)                                        // 8

//Prototypes are Objects that live in memory once created

