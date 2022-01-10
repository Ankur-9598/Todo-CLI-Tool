const path = require("path");
const { findTodosLength, showList } = require("./global_functions");

const taskFilePath = path.join(__dirname + "../../" + "task.txt");
const completedTaskFilePath = path.join(__dirname + "../../" + "completed.txt");

// show current report...
const showReport = () => {
    showPendingTodos();
    showCompletedTodos();
}

const showPendingTodos = () => {
    const len = findTodosLength(taskFilePath);
    console.log(`Pending : ${len}`);

    showList(taskFilePath);  
};

const showCompletedTodos = () => {
    const len = findTodosLength(completedTaskFilePath);
    console.log(`\nCompleted : ${len}`);
    
    // additional flag true is used to didn't print "[priority]" in completed todos
    showList(completedTaskFilePath, true);
}


module.exports = showReport;