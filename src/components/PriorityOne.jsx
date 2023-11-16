import TaskCard from "./TaskCard";
export default function PriorityOne({task}){

    
    return(
        <div className="priorty1">
            {task.priority === "1" && 
                    ( <TaskCard task={task} />)
                }
            
            
            
        </div>

    )
}