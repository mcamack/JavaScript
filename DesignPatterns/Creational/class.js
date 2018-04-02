class Task{
    constructor(name){
        this.name = name;
        this.completed = false;
    };

    complete() {
        this.completed = true;
        console.log("Completed task: " + this.name);
    };

    save() {
        console.log("Saving task: " + this.name);
    };
}

var task1 = new Task("First Task");
var task2 = new Task("Second Task");

task1.complete();
task2.save();