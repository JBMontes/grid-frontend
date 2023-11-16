import TaskCard from "./TaskCard";
export default function PriorityFour({task}){

    
    return(
        <div className="priorty4">
            {task.priority === "4" && ( <TaskCard task={task} />) }
            
        </div>

    )
}