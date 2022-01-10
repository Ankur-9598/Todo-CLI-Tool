const { appendInTaskFile, deleteFromTaskFile } = require("./global_functions");
const path = require("path");

const taskFilePath = path.join(__dirname + "../../" + "task.txt");

// Add todo to the list...
const addTodo = (priority, todoName) => {
    if(priority === undefined || todoName === undefined) {
        console.log('Error: Missing tasks string. Nothing added!');
        return;
    }

    appendInTaskFile(taskFilePath, `${priority} ${todoName}`);
    
    // it is done to sort the pending task file according to priority as this function before deleting sort the todos..
    deleteFromTaskFile(taskFilePath, -1);
    console.log(`Added task: "${todoName}" with priority ${priority}`);
}


module.exports = addTodo;