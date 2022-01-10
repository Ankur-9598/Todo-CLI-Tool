## A Node.js Command Line TODO application
### Running on local machine :-
#### &ensp; 1.Go to the project root directory
&emsp; i. run ```npm install``` <br />
&emsp; ii. run ```mklink task task.bat``` on command prompt or ```cmd /c mklink task task.bat``` on powershell. (Make sure to open the shell in administrator mode)

#### &ensp; 2.Get started with creating todos with command ```task $options``` on command prompt or ```./task $options``` on powershell.

### To test run ```npm test```


### Available Commands:-
`Usage :-`<br />
`$ ./task add 2 hello world`&emsp;    # Add a new item with priority 2 and text "hello world" to the list<br />
`$ ./task ls`&emsp;               # Show incomplete priority list items sorted by priority in ascending order<br />
`$ ./task del INDEX`&emsp;          # Delete the incomplete item with the given index<br />
`$ ./task done INDEX`&emsp;           # Mark the incomplete item with the given index as complete<br />
`$ ./task help` &emsp;               # Show usage<br />
`$ ./task report` &emsp;           # Statistics<br />
