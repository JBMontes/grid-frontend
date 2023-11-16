import TaskCard from "./TaskCard";
export default function PriorityThree({task}){

    
    return(
        <div className="priorty3">
            {task.priority === "3" && ( <TaskCard task={task} />) }
            
            
        </div>

    )
}