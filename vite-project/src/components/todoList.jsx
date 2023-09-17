import { useState } from "react";

const TodoList = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');
    const [duration, setDuration] = useState('');
    const [status, setStatus] = useState('');
    const addNow = () =>{
        setTaskList((pre)=>[
            ...pre,
            {
               id: taskList.length,
               title: task,
               duration: duration,
               status: status
            }
        ])
    }
    return (
        <div className="main">

            <h1 className="title">My To-Do List</h1>
           
            <h3 className="sub_title">New Task Creation</h3>
            <div className="separator"></div>

 {/* input section */}

            <div className="input_section">
                <input type="text" value={task} placeholder="Add new task" onChange={(e)=> {
                    setTask(e.target.value)
                }}/>
                <input type="text" value={duration} placeholder="Duration" onChange={(e)=>{
                    setDuration(e.target.value)
                }}/>
                <input type="text" value={status} placeholder="Status" onChange={(e)=>{
                    setStatus(e.target.value)
                }}/>
              
              <button onClick={addNow}>Add Now</button>
            </div>

            <div className="sub_title">Task List</div>
            <div className="separator"></div>

            {/* table section to show task list */}
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Task Name</th>
                        <th>Duration</th>
                        <th>Status</th>   
                    </tr>
                </thead>
                             
            </table>


            {/* task list section */}

            <div>
                {taskList.map(({title, duration, status}, index) => {
                    return( 
                       <tbody key={index}> 
                        <tr>
                            <th>{index + 1}</th>
                            <th>{title}</th>
                            <th>{duration}</th>
                            <th>{status}</th>  
                        </tr>

                       </tbody>
                    )
                })}
            </div>

        </div>
    );
};

export default TodoList;



