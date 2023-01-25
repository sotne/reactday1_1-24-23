import React, {useState} from 'react'
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function Todo() {
    const [ tasks, setTasks] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();
        // console.log(event.target.task.value);
        let newTask = event.target.task.value;
        setTasks([...tasks,newTask]);
        event.target.task.value = ''
    }


  return (
        <>
            <h1 className='text-center'> neyt's awesome todo list</h1>
            <ToDoForm handleFormSubmit= {handleFormSubmit} />
            <div className="row">
                {tasks.map((task, idx) => <ToDoCard task={task} key={idx} />)}
            </div>
        
        </>
  )
}
