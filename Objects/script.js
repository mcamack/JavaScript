'use strict';

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
