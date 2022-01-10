const { deleteFromTaskFile } = require("./global_functions");
const path = require("path");

const taskFilePath = path.join(__dirname + "../../" + "task.txt");


// delete given indexed todo...
const deleteTodo = index => {
    if(index === undefined) {
        console.log('Error: Missing NUMBER for deleting tasks.');
        return;
    }
    
    const deletedItem = deleteFromTaskFile(taskFilePath, index);
    if(deletedItem === undefined) {
        console.log(`Error: task with index #${index} does not exist. Nothing deleted.`);
        return;
    }
    console.log(`Deleted task #${index}`);
}


module.exports = deleteTodo;