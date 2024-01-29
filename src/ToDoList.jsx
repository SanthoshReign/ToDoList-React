import {useState} from "react";

function ToDoList(){
    //to store tasks in Tasks array and update them using setTasks function
    const [Tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        //only add task if it is not an empty string
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            //refresh newTask storage
            setNewTask("");
        }
    }

    function deleteTask(index){
        //filter task except given index task
        const updatedTaskList = Tasks.filter((_,i) => i !== index);
        setTasks(updatedTaskList);
    }

    function moveTaskUp(index){
        //first task cannot be moved upward
        if(index > 0){
            //get all tasks using spread operator
            const updatedTasks = [...Tasks];
            //swaping elements of an array
            [updatedTasks[index], updatedTasks[index - 1]]
               = [updatedTasks[index-1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        //last task cannot be moved downward
        if(index < Tasks.length - 1){
            //get all tasks using spread operator
            const updatedTasks = [...Tasks];
            //swaping elements of an array
            [updatedTasks[index], updatedTasks[index + 1]]
               = [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    return(
        
        <div className="todolist">
            <h1 className="heading"> ToDoList </h1>
            <div>
                <input 
                    type="text" 
                    className="inputBox"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button 
                    className="addButton"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>    
            
            <ul>
                {Tasks.map((task, index) => 
                    <li className="taskList" key={index}>
                        <span className="task">{task}</span>
                        <button className="deleteButton" 
                                onClick={() => deleteTask(index)}>Delete</button>
                        <button className="moveButton"
                                onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className="moveButton"
                                onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>    
                )}
            </ul>
        </div>
        
    )

}
export default ToDoList;