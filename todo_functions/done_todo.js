const { appendInTaskFile, deleteFromTaskFile } = require("./global_functions");
const path = require("path");

const taskFilePath = path.join(__dirname + "../../" + "task.txt");
const completedTaskFilePath = path.join(__dirname + "../../" + "completed.txt");


// mark the given indexed todo as done...
const doneTodo = index => {
    if(index === undefined) {
        console.log('Error: Missing NUMBER for marking tasks as done.');
        return;
    }
    const completedTodo = deleteFromTaskFile(taskFilePath, index);
    if(completedTodo === undefined) {
        console.log(`Error: no incomplete item with index #${index} exists.`);
        return;
    }
    
    appendInTaskFile(completedTaskFilePath, completedTodo);

    console.log(`Marked item as done.`);
};


module.exports = doneTodo;

