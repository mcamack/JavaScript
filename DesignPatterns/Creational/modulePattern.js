/* Module Design Pattern
*
*  simple way to encapsulate methods
*  creates a "toolbox" of functions to use
*
*  just like an object, but usually only have 1 of the module
*  no "new" calls, only 1 is created
*
*/

//Example to create a database interaction module

var repo = function() {
    return{
        get: function(id){
            console.log("Getting task " + id);
            return {
                name: "new task from DB"
            }
        },

        save: function(task){
            console.log("Saving " + task.name + " to the DB");
        }
    }
}

module.exports = repo();