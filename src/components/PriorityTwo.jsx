import TaskCard from "./TaskCard";

export default function PriorityTwo({task}){

    
    return(
        <div className="priorty2">
            {task.priority === "2" && ( <TaskCard task={task} />) }
            
            
        </div>

    )
}