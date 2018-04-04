var Task = require('./Task');
var Repo = require('./modulePattern')

var task1 = new Task({name: "First Task"});
var task2 = new Task({name: "Second Task"});

var task3 = new Task(Repo.get("Module Task"));

task1.complete();
task2.save();
task3.complete();