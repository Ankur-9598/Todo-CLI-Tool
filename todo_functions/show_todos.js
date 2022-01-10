const path = require("path");
const { findTodosLength, showList } = require("./global_functions");

const taskFilePath = path.join(__dirname + "../../" + "task.txt");

// list all the pending todos...
const showTodos = () => {
    const len = findTodosLength(taskFilePath)
    if(len === 0) {
        console.log('There are no pending tasks!');
        return;
    }
    
    showList(taskFilePath);
}


module.exports = showTodos;