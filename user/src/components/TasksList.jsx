import { useEffect, useState } from "react"
import {api} from '../api/tasks.api'
import { TaskCard } from "./TaskCard"

export const TasksList = () => {
    
    const [tasks,setTasks] = useState([])
    
    const fetchTasks = async ()=> {
        const response = await api.get("/tasks/api/v1/tasks/");
        const res = response.data
        setTasks(res);
    }

    useEffect(()=>{
        fetchTasks();
    },[]); 


    return (
        <>
        <h1 className="font-bold text-2xl mb-4 flex justify-center bg-gradient-to-t from-orange-500 via-blue-500 to-teal-500 text-transparent bg-clip-text" 
        >Tasks List
        </h1>
        <br />
        <div className="grid grid-cols-3 gap-3  ">
            {tasks.map((task)=>(
                <TaskCard key={task.id} task={task} />
                ))}
        </div>
        
        </>
    
    )
}
