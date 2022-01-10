const addTodo = require("./todo_functions/add_todo");
const deleteTodo = require("./todo_functions/delete_todo");
const doneTodo = require("./todo_functions/done_todo");
const showReport = require("./todo_functions/report_todo");
const showHelpCommands = require("./todo_functions/show_help");
const showTodos = require("./todo_functions/show_todos");



// get command line arguments...
const args = process.argv.slice(2);

// if no arguments give, throw a help command
if(args.length === 0) {
    args.push('help');
}


// handle arguments provided on command line..
const mainCommand = args[0];

switch (mainCommand) {

    case 'add':
        addTodo(args[1], args[2]);
        break;

    case 'del':
        deleteTodo(args[1]);
        break;

    case 'done':
        doneTodo(args[1]);
        break;

    case 'ls':
        showTodos();
        break;

    case 'report':
        showReport();
        break;

    default:
        showHelpCommands();
        break;
}