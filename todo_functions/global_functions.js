const fs = require("fs");

// append todos in given file...
const appendInTaskFile = (filePath, taskData )=> {
    let fileExist = fs.existsSync(filePath);
    if(fileExist) {
        fs.appendFileSync(filePath, `${taskData}\n`, 'utf8', err => {
            if(err) throw err;
        });
    } else {
        fs.writeFileSync(filePath, `${taskData}\n`, err => {
            if(err) throw err;
        });
    }
}


// delete todos from given file and return deleted item...
const deleteFromTaskFile = (filePath, index) => {
    const fileContent = fs.readFileSync(filePath, "utf-8").split("\n").slice(0, -1);
    const len = findTodosLength(filePath);
    
    const todoObj = {};
    for(let i=0; i<len; ++i) {
        let priority = Number(fileContent[i].split(" ")[0]);
        let todoName = fileContent[i].split(" ").slice(1).join(" ");
        todoObj[priority] = todoName;
    }

    let newData = '';
    let deletedItem;
    Object.keys(todoObj).forEach((key, idx) => {
        if(idx + 1 != index)
            newData += `${Number(key)} ${todoObj[key]}\n`;
        else
            deletedItem = `${todoObj[key]}`;
    });

    fs.writeFile(filePath, newData, err => {
        if(err) throw err;
    });

    return deletedItem;
}


// find length of todos item in given file...
const findTodosLength = filePath => {
    let fileExist = fs.existsSync(filePath);
    if(fileExist) {
        return fs.readFileSync(filePath, "utf-8").split("\n").length - 1;
    }
    return 0;
}


// listout all the todos from given file...
// additional variable "flag" is used to check whether to print "[priority]" or not...
const showList = (filePath, flag)=> {

    let fileExist = fs.existsSync(filePath);
    if(fileExist) {

        let fileContent = fs.readFileSync(filePath, "utf-8").split("\n").slice(0, -1);
        let todoCount = fileContent.length;
        let todoArr = {};

        for(let i=0; i<todoCount; ++i) {
            let priority = fileContent[i].split(" ")[0];
            let todoName = fileContent[i].split(" ").slice(1).join(" ");
            todoArr[priority] = todoName;
        }
        
        Object.keys(todoArr).forEach((key, idx) => {
            let data;
            if(flag) {
                data = `${idx + 1}. ${key} ${todoArr[key]}`;
            }
            if(!flag) {
                data = `${idx + 1}. ${todoArr[key]} [${key}]`;
            }
            console.log(data);
        });
    }
}



module.exports = {
    deleteFromTaskFile,   
    findTodosLength,
    appendInTaskFile,
    showList
};
