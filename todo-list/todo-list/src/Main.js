import React from 'react';
import {useState} from 'react';


export default function Main() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    function addToDo(){
        setTaskList([...taskList, task])

    }
    const taskListContent = taskList.map((task, index)=>{
        return(
            <div>
                <p>{task}</p>
               
                <i class="far fa-trash-alt" onClick= {()=>deleteTask(index)}></i>
            </div>
        )
    })
    function deleteTask(index){

        var duparray = [...taskList]
        duparray.splice(index,1)
        setTaskList(duparray)
        setTask('')
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Todo List React</h1>
                    <input type="text" placeholder="Enter the task" className="form-control" value={task}
                    onChange={(e)=>{setTask(e.target.value)}}
                    />
                    <button className="btn btn-success" onClick={addToDo}>Add</button>

                    <br/>
                    {taskListContent}
                </div>
            </div>
        </div>
    )
}
