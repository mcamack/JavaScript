'use strict';

// All user defined and built-in objects are desecendents of the 'Object' object

// 'new' operator creates an instance of an obj, followed by a constructor
    // constructor can be Object(), Array(), or Date()
    // return val from constructor is a reference to the obj
    var book = new Object()
    book.title = "Greater JS Book Ever"
    book.length = 399
    display(book)

// User-Defined functions can also create objects
    // place in the <head> section so it will be loaded to memory before it's called
    // 'this' keyword assigns arguments to the object passed to the function
    function novel(title, length){
        this.title = title
        this.length = length
    }
    var newNovel = new novel("WorstJS Book", 19)
    display(newNovel)

// Define methods for an object separately and then assign that method as a property
    //create new method which will create new 'price' variable within the obj
    //use with(this) to avoid having to type this. for every obj property
    function addPrice(amount){
        this.price = amount
    }
    //create new object w/ 1 parameter 'name' and 1 method which is our pre-defined method
    //now the object has the addPrice method
    function itemWithPrice(name, method){
        this.name = name
        this.addPrice = method
    }
    //instantiate new obj with its 1 param and then call its method to add the price
    var newItem = new itemWithPrice("CoolGadget", addPrice)
    newItem.addPrice(13.99)
    display("newItem price: " + newItem.price)



//create cat object
var cat = {
    name: {first: "Fluffy", last: "Scratcherson"},
    color: "white"
}

// assign a new property "fullName" to the cat Object
// this property can be accessed just like any other, but
// is actually being computed by a function when called by
// getters and setters
Object.defineProperty(cat, "fullName",
{
    get: function() {
        return this.name.first + " " + this.name.last
    },
    set: function(value){
        var nameParts = value.split(" ");
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
})

display(cat.fullName)
cat.fullName = "Itchy McScratcherson"
display(cat.fullName)
